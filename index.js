const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/cryptoRoutes");

require("dotenv").config();

app.use(express.json());
const allowedOrigins = [
    "http://localhost:3000", 
    "https://your-frontend-domain.com", 
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }));
app.use("/api", routes);

app.get("/", (req, res) => {
    return res.send("get request.")
})

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`server is running at port: ${port}`);
})