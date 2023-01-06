import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

const CONNECTION_URL =
  "mongodb+srv://ciscocaballero:Cisco1122$@cluster0.cpq8nmo.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "30mb", extend: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.listen(3000, () => console.log("running at 3000 port"));
app.use("/posts", postRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
// https://www.mongodb.com/cloud/atlas
