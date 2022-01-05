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

function entireDesign() {
  const etsyED = {
    method: "GET",
    url: "/.netlify/functions/entireDesign",
   
  };
  const etsyData = axios.request(etsyED)
  .catch(function (error) {
    console.log(error);
  });
return etsyData
}

export { tableAPI, entireDesign };
