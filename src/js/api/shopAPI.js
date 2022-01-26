import axios from "axios";
const shopObject = {};
const imgOptions = {
  url: "/.netlify/functions/edListingImgs",
};
async function getShop(shop, listings) {
  await axios
    .request(shop)
    .then((res) => {
      shopObject.id = res.data.shop_id;
      shopObject.name = res.data.shop_name;
      shopObject.url = res.data.url;
      shopObject.title = res.data.title;
      shopObject.icon = res.data.icon_url_fullxfull;
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .request(listings)
    .then((res) => {
      const listingsArray = res.data.results;
      shopObject.listings = listingsArray;
      
    })
    .catch((err) => {
      console.log(err);
    });

    // async function shopImgs(){ await axios.request(imgOptions)
    // .then((res) => {
    //   console.log("img req ", res.data)
    // })}

    // shopObject.listings.images =  shopObject.listings.forEach((listing) => {
    //   console.log("listing id ", listing.listing_id)
    //  shopImgs(listing.listing_id)
    // })
    

  // console.log("shop obj", shopObject);
  return await shopObject;
}

export { getShop };
