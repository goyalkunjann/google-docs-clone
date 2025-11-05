import express from "express";
import cors from "cors";
import documentRoutes from "./routes/document.route";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/docs", documentRoutes);

export default app;
