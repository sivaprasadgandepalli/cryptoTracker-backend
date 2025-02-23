const axios = require("axios");
require("dotenv").config();
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

const fetchCoinsList = async (currency = "usd") => {
    const response = await axios.get(`${BASE_URL}/markets`, {
        params: { vs_currency: currency, order: "market_cap_desc", per_page: 100, page: 1, sparkline: false },
        headers: { 'x-cg-api-key': API_KEY }
    });
    console.log({ vs_currency: currency, order: "market_cap_desc", per_page: 100, page: 1, sparkline: false });

    return response.data;
};

const fetchSingleCoin = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`
        , { headers: { 'x-cg-api-key': API_KEY } }
    );
    return response.data;
};

const fetchHistoricalChart = async (id, currency = "usd", days) => {
    const response = await axios.get(`${BASE_URL}/${id}/market_chart`, {
        params: { vs_currency: currency, days: days },
        headers: { 'x-cg-api-key': API_KEY }
    });
    return response.data;
};

const trendingCoins = async (currency = "usd") => {
    const response = await axios.get(`${BASE_URL}/markets`, {
        params: { vs_currency: currency, order: "gecko_desc", sparkline: false, price_change_percentage: "24h", per_page: 15, page: 1 },
        headers: { 'x-cg-api-key': API_KEY }
    });
    // console.log(response.data);

    return response.data;
}

module.exports = { fetchCoinsList, fetchSingleCoin, fetchHistoricalChart, trendingCoins };
