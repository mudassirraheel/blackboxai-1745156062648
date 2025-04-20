window.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const locationInfo = document.getElementById('locationInfo');
  const latitudeEl = document.getElementById('latitude');
  const longitudeEl = document.getElementById('longitude');

  const pathParts = window.location.pathname.split('/');
  const trackingId = pathParts[pathParts.length - 1];

  if (!navigator.geolocation) {
    statusEl.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    latitudeEl.textContent = latitude.toFixed(6);
    longitudeEl.textContent = longitude.toFixed(6);
    locationInfo.classList.remove('hidden');
    statusEl.textContent = 'Location captured successfully.';

    // Send location to server
    fetch(`/location/${trackingId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ latitude, longitude }),
    }).catch(() => {
      statusEl.textContent = 'Failed to send location to server.';
    });
  }

  function error() {
    statusEl.textContent = 'Unable to retrieve your location.';
  }

  statusEl.textContent = 'Requesting your location...';
  navigator.geolocation.getCurrentPosition(success, error);
});
