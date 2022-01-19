const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;

exports.handler = async (event) => {
  try {
    const shopRes = await fetch("https://openapi.etsy.com/v3/application/shops/8861893", {
      method: "GET",
      headers: { "x-api-key": `${etsyKey}` },
      mode: "cors"
    })
    const apiRes = await shopRes.json();
    return {
      statusCode: 200,
      body: JSON.stringify(apiRes),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
