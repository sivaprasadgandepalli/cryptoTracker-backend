const cryptoService = require("../services/cryptoService");

const getCoinsList = async (req, res) => {
    try {
        const data = await cryptoService.fetchCoinsList(req.params.currency);
        res.json(data);
    } catch (error) {
        console.log(error.message);
        console.log(req.url);

        res.status(500).json({ error: "Error fetching coins list",msg:error.message });

    }
};

const getSingleCoin = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await cryptoService.fetchSingleCoin(id);
        res.json(data);
    } catch (error) {
        // console.log(error);
        // console.log(req.url);

        res.status(500).json({ error: "Error fetching coin details" });
    }
};

const getHistoricalChart = async (req, res) => {
    try {
        const { id, days, currency } = req.params;
        const data = await cryptoService.fetchHistoricalChart(id, currency, days);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching historical data" });
    }
};

const getTrendingCoins = async (req, res) => {
    try {

        const data = await cryptoService.trendingCoins(req.params.currency);
        return res.json(data);

    } catch (error) {
        res.status(500).json({ error: "Error fetching trendingcoins data" });
    }
}

module.exports = { getCoinsList, getSingleCoin, getHistoricalChart, getTrendingCoins };
