import axios from "axios";

function tableAPI() {
  const tableOptions = {
    method: "GET",
    url: "https://viperscore.p.rapidapi.com/competition/standings",
    params: { competitionId: "17", seasonId: "37036" },
    headers: {
      "x-rapidapi-host": "viperscore.p.rapidapi.com",
      "x-rapidapi-key": "176422e431msh80623a6b50ada5fp135307jsnab52c5c4c171",
    },
  };
  return axios.request(tableOptions).catch(function (error) {
    console.error(error);
  });
}

function etsyAPI() {
  const etsyOptions = {
    method: "GET",
    url: "https://openapi.etsy.com/v3/application/shops?shop_name=entire%2Bdesign",
    headers: {
      "x-api-key": "uxcmk2zeec8cn1ew5uj7v8s1",
    },
  };
  return axios.request(etsyOptions).catch(function (error) {
    console.log(error);
  });
}

export { tableAPI, etsyAPI };
