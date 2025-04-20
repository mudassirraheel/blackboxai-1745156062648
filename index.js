const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const port = 3000;

// In-memory store for location data keyed by link ID
const locationData = {};

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to generate a unique tracking link
app.post('/generate-link', (req, res) => {
  const id = uuidv4();
  const link = `${req.protocol}://${req.get('host')}/track/${id}`;
  locationData[id] = null; // Initialize with no location yet
  res.json({ link });
});

// Endpoint to receive location data
app.post('/location/:id', (req, res) => {
  const id = req.params.id;
  const { latitude, longitude } = req.body;
  if (locationData.hasOwnProperty(id)) {
    locationData[id] = { latitude, longitude, timestamp: new Date() };
    console.log(`Location received for ID ${id}:`, locationData[id]);
    res.json({ status: 'success' });
  } else {
    res.status(404).json({ error: 'Invalid tracking ID' });
  }
});

// Serve tracking page
app.get('/track/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'track.html'));
});

// Endpoint to get location data for a tracking ID
app.get('/location/:id', (req, res) => {
  const id = req.params.id;
  if (locationData.hasOwnProperty(id)) {
    res.json(locationData[id]);
  } else {
    res.status(404).json({ error: 'Invalid tracking ID' });
  }
});

app.listen(port, () => {
  console.log(`Location tracker app listening at http://localhost:${port}`);
});
