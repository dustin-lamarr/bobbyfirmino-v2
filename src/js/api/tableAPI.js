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

export { tableAPI };
