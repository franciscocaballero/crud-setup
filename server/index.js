import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30 mb", extend: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extend: true }));
app.use(cors());

// httpes://www.mongodb.com/cloud/atlas