const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// Handle routing for SPA (Single Page Application)
app.get("/", (req, res) => {
  console.log("wew");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", async (req, res) => {
  console.log("api");
  res.setHeader("Cache-Control", "no-store"); // Prevent caching
  return res.status(200).json({ message: "Hello api world" });
});

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
