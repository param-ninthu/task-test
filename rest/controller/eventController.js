const { google } = require("googleapis");
require("dotenv").config();

//@desc Get all events
//@route GET /api/events
//@access Public

const fetchEvents = async (req, res) => {
  // here we are extracting the calendar_Id, startTime and endTime from the request body
  const { calendar_Id, startTime, endTime } = req.body;

  // here we are creating a new GoogleAuth object for authentication
  const auth = new google.auth.GoogleAuth({
    keyFile: "./cred.json", // path to the credential files
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"], // scopes for calendar access
  });

  const calendar = google.calendar({ version: "v3", auth }); // Here we are creating the new calendar instance

  try {
    const response = await calendar.events.list({
      auth: auth, // authenticating the request
      calendarId: calendar_Id, // using this calendar id it will fetch the events
      timeMin: startTime,
      timeMax: endTime,
      timeZone: "Asia/Kolkata",
    });

    const items = response.data.items;
    res.json(items); // sending the response as json
  } catch (error) {
    console.log(`Error at fetchEvents --> ${error}`);
    res.status(500).json({ error: "Failed to fetch events" }); // shoes the status code with error message
  }
};

module.exports = { fetchEvents };
