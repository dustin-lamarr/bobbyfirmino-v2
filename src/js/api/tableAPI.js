import axios from "axios";

async function tableAPI() {
  const tableOptions = {
    method: "GET",
    url: "/.netlify/functions/plTableAPI",
  };
  const plData = await axios.request(tableOptions).catch(function (error) {
    console.error(error);
  });
  return plData;
}

export { tableAPI };
