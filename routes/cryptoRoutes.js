const express = require("express");
const { getCoinsList, getSingleCoin, getHistoricalChart, getTrendingCoins } = require("../controllers/cryptoController");

const router = express.Router();

router.get("/coinsList/:currency", getCoinsList);
router.get("/singleCoin/:id", getSingleCoin);
router.get("/historicalChart/:id/:currency/:days", getHistoricalChart);
router.get("/trendingCoins/:currency", getTrendingCoins);
module.exports = router;
