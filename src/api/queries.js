const coingeckoUrl = "https://api.coingecko.com/api/v3";
const cryptocompareUrl = "https://min-api.cryptocompare.com/data/v2";

// All coins
const getRates = async (page) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=true`
  );
  return response.json();
};

// Top 7 coins by user's searcg
const getTopSevenCoins = async () => {
  const response = await fetch(`${coingeckoUrl}/search/trending?vs_currency=usd`);
  return response.json()
};

// Manually selected coins
const getExactCoins = async (coins) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/markets?vs_currency=usd&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d`
  );
  return response.json();
};

//Getting exact coin info
const getCoinInfo = async (coin) => {
  const response = await fetch(`${coingeckoUrl}/coins/${coin}`);
  return response.json();
};

//Getting exact coin graph
const getCoinGraph = async (coin, days, interval) => {
  const response = await fetch(
    `${coingeckoUrl}/coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
  );
  return response.json();
};

//Getting news 
const getNews = async () => {
  const response = await fetch(`${cryptocompareUrl}/news/?lang=EN`);
  return response.json();
};

// Search coins
const searchCoins = async (query) => {
  const response = await fetch(`${coingeckoUrl}/search?query=${query}`);
  return response.json();
}

export { getRates, getExactCoins, getCoinInfo, getCoinGraph, getNews, getTopSevenCoins, searchCoins };
