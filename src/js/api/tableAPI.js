import axios from "axios";

function tableAPI() {
  const tableOptions = {
    method: "GET",
    url: "/.netlify/functions/plTableAPI"
  };
  const plData = axios.request(tableOptions).catch(function (error) {
    console.error(error);
  });
  return plData
}

export { tableAPI };
