const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;

exports.handler = async () => {
  const shopData = await fetch(
    "https://openapi.etsy.com/v3/application/shops/8861893",
    {
      headers: {
        "x-api-key": `${etsyKey}`,
      },
    }
  );
  const edShopData = await shopData.json();

  return {
    statusCode: 200,
    body: JSON.stringify(edShopData),
  };
};