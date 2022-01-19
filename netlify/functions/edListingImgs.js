const fetch = require("node-fetch");
require("dotenv").config();
const etsyKey = process.env.ETSY_API_KEY;

exports.handler = async ({ listing_id, image_id }) => {
  const listingImgs = await fetch(
    `https://openapi.etsy.com/v3/application/shops/8861893/listings/${listing_id}/images/${image_id}`,
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
