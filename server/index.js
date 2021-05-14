import {} from "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Routes //
import postRoutes from "./routes/posts.js";

const app = express();

// BodyParser //
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Loading Routes (Must be loaded after cors) //
app.use("/posts", postRoutes);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
//302
const url = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose
  .connect(url, options)
  .then(() =>
    app.listen(PORT || 5000, () =>
      console.log("Server is running on PORT: ", { PORT })
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
