const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;

exports.handler = async ({ id }) => {
  // var id = parseInt(listing_id)
  console.log("listing id ", id)
  const listingImgs = await fetch(
    `https://openapi.etsy.com/v3/application/shops/8861893/listings/${id}/images`,
    {
      headers: {"x-api-key": etsyKey},
      mode: "cors"
    }
  );
  const listingImg = await listingImgs.json();
  return {
    statusCode: 200,
    body: JSON.stringify(listingImg),
  };
};
