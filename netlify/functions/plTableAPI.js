var axios = require("axios").default;
require("dotenv").config();
const plKey = process.env.PL_API_KEY;

exports.handler = async () => {
  const tableOptions = {
    method: "GET",
    url: "https://viperscore.p.rapidapi.com/competition/standings?competitionId=17&seasonId=37036",
    headers: {
      "x-rapidapi-host": "viperscore.p.rapidapi.com",
      "x-rapidapi-key": plKey,
    },
  };
  const plTable = await axios.request(tableOptions).catch(function (error) {
    console.error(error);
  });

  return {
    statusCode: 200,
    body: JSON.stringify(plTable.data),
  };
};
