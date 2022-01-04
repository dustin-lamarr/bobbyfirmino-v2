const fetch = require('node-fetch')
exports.handler = async () => {
  // const etsyOptions = {
  //   method: "GET",
  //   url: "https://openapi.etsy.com/v3/application/shops/8861893",
  //   headers: {
  //     "x-api-key": "uxcmk2zeec8cn1ew5uj7v8s1",
  //   }
  // }
  const etsyRes = await fetch("https://openapi.etsy.com/v3/application/shops/8861893", {
    headers: {
          "x-api-key": "uxcmk2zeec8cn1ew5uj7v8s1",
        }
  })
  // const apiData = axios.request(etsyOptions);
  const etsyData = await etsyRes.json()
  return {
statusCode: 200,
body: JSON.stringify(etsyData)
  }
};
