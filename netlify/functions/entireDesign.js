const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;
// /listings/868572852/images/2620506665
exports.handler = async () => {
  const entireDesign = await fetch(
    "https://openapi.etsy.com/v3/application/shops/8861893",
    {
      headers: {
        "x-api-key": `${etsyKey}`,
      },
    }
  );
  const entireDesignData = await entireDesign.json();
  return {
    statusCode: 200,
    body: JSON.stringify(entireDesignData),
  };

};
