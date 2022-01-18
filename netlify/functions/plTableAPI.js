const fetch = require("node-fetch");
require("dotenv").config();
const plKey = process.env.PL_API_KEY;

exports.handler = async () => {
  const plTable = await fetch(
    "https://viperscore.p.rapidapi.com/competition/standings?competitionId=17&seasonId=37036",
    {method: "GET",
      headers: {
        "x-rapidapi-host": "viperscore.p.rapidapi.com",
        "x-api-key": `${plKey}`,
      }
  }
  ).catch(err => {
    console.error(err);
  });
  const plTableData = await plTable.json();
  console.log(plTableData);
  return {
    statusCode: 200,
    body: JSON.stringify(plTableData),
  };
};
