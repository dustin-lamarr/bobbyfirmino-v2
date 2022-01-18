import axios from "axios";

async function getShop(shop) {
 const shopData = axios.request(shop)
  return shopData
}

async function shopListings(listings) {
  const listingData = axios.request(listings)
    .catch((err) => {
      console.log(err);
    });
    return listingData
}

async function listingImages({ listingID, imageID }) {
  const imgData = axios.request({ listingID, imageID })
  .catch((err) => {
    console.log(err);
  });
  return imgData
}
    export { getShop, shopListings, listingImages }