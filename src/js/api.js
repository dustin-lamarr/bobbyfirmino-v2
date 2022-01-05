import axios from "axios";

function tableAPI() {
  const tableOptions = {
    method: "GET",
    url: "/.netlify/functions/entireDesign"
  };
  const plData = axios.request(tableOptions).catch(function (error) {
    console.error(error);
  });
  return plData
}

function entireDesignShop() {
  const etsyED = {
    method: "GET",
    url: "/.netlify/functions/edShop",
   
  };
  const getEDShop = axios.request(etsyED)
  .catch(function (error) {
    console.log(error);
  });
return getEDShop
}

function entireDesignListings() {
  const etsyED = {
    method: "GET",
    url: "/.netlify/functions/edListings",
   
  };
  const getEDListings = axios.request(etsyED)
  .catch(function (error) {
    console.log(error);
  });
return getEDListings
}

export { tableAPI, entireDesignShop, entireDesignListings };
