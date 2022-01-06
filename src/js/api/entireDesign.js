import axios from "axios";

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



  export const entireDesignAPI = { entireDesignShop, entireDesignListings }