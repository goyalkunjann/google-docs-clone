import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running ",
  });
});

export default app;
