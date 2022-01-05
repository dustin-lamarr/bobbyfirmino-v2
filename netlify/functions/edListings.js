const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;

exports.handler = async () => {
  const listingData = await fetch(
    "https://openapi.etsy.com/v3/application/shops/8861893/listings/active?keywords=roberto+firmino",
    {
      headers: {
        "x-api-key": `${etsyKey}`,
      },
    }
  );
  const edListingData = await listingData.json();
  return {
    statusCode: 200,
    body: JSON.stringify(edListingData),
  };
};
