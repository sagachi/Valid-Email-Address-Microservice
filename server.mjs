import express from "express";
import dotenv from "dotenv";
import validateRoutes from "./routes/validateRoutes.mjs";

dotenv.config();
const app = express();
app.use(express.json());

//Routes
app.use("/api/v1/validate", validateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Email Validator running on port ${PORT}`));
