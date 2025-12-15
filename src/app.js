const express = require("express");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");
const applicationRoutes = require("./routes/application.routes");

const app = express();
app.use(express.json()); // 🔴 REQUIRED

app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("ATS Backend is running");
});

module.exports = app;
