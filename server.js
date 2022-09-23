import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import ProductRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API Is running");
});

app.use("/api/products", ProductRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
