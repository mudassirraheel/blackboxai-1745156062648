
Built by https://www.blackbox.ai

---

```markdown
# Location Tracker

## Project Overview
The Location Tracker is a web application that allows users to generate unique tracking links. Visitors can share their location data through these links, and the application records and displays their geographical coordinates. This project is built using Node.js and Express and is intended for educational and demonstration purposes.

## Installation
To get started with the project, you'll need to have [Node.js](https://nodejs.org/) installed on your machine. Once Node.js is set up, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd location-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```

Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage
1. To generate a tracking link, send a POST request to `/generate-link`. You will receive a JSON response containing a unique link.
2. Visitors can use the link to access the tracking page, where they can send their location data (latitude and longitude) via a POST request to `/location/:id`, where `:id` is the unique identifier from the link.
3. You can retrieve the location data for any particular tracking ID by sending a GET request to `/location/:id`.

## Features
- Generate unique tracking links using UUID.
- Capture and store latitude and longitude data from visitors.
- Retrieve and display stored location data for specific tracking links.
- Static tracking page served to users for submitting location data.

## Dependencies
This project includes the following dependencies listed in `package.json`:
- **express**: A minimal and flexible Node.js web application framework for building web applications and APIs.
- **uuid**: A library for generating unique identifiers.

## Project Structure
```plaintext
location-tracker/
├── node_modules/         # Contains all npm packages
├── package.json          # Contains metadata and dependencies for the project
├── package-lock.json     # Locks the exact versions of dependencies
├── public/               # Directory for public static files
│   └── track.html        # HTML file for the tracking page
└── index.js              # Main application file to run the server
```

## Note
Be mindful of privacy considerations when using or demonstrating this application, as it deals with location data.
```