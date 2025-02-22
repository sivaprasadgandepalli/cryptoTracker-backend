const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/cryptoRoutes");

require("dotenv").config();

app.use(express.json());
app.use(cors({
    origin: "https://cryptotracker-backend-ayh3.onrender.com"
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