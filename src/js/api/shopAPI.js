import axios from "axios";

function getShop(shop) {
    const shopObject = {}
  axios.request(shop).then((res) => {
    (shopObject.shopName = res.data.shop_name),
      (shopObject.shopTitle = res.data.title),
      (shopObject.shopImg = res.data.icon_url_fullxfull);
    console.log(res.data);
  return shopObject
  })
}
  // axios.request(listingParams)
    // .then((res) => {
    //   shopObject.listings = res.data.results;
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    
    export { getShop }