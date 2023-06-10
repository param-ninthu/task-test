const { google } = require("googleapis");
require("dotenv").config();

//@desc Get all events
//@route GET /api/events
//@access Public

const fetchEvents = async (req, res) => {
  const { calendar_Id, startTime, endTime } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "./cred.json",
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  try {
    const response = await calendar.events.list({
      auth: auth,
      calendarId: calendar_Id,
      timeMin: startTime,
      timeMax: endTime,
      timeZone: "Asia/Kolkata",
    });

    const items = response.data.items;
    res.json(items);
  } catch (error) {
    console.log(`Error at fetchEvents --> ${error}`);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

module.exports = { fetchEvents };
