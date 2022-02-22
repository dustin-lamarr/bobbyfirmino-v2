import axios from "axios";

async function getShop(shop, listings) {
  const shopObject = {};

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


  // console.log("shop obj", shopObject);
  return await shopObject;
}

export { getShop };
