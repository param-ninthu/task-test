const { google } = require("googleapis");
require("dotenv").config();

// const calendarId =
//   "c_03f007cae7f9da18e3f16d4af3c1e6b804eca8caafb1fb9c6cfd7b5980154d2c@group.calendar.google.com";

//@desc Get all events
//@route GET /api/events
//@access Public

const getEvents = async (req, res) => {
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
    console.log(`Error at getEvents --> ${error}`);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

module.exports = { getEvents };

// getEvents(calendarId, startTime, endTime)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
