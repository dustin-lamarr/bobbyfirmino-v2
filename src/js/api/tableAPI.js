import axios from "axios";
// import 'dotenv/config'
// const plKey = process.env.VUE_APP_PL_API_KEY;

async function tableAPI() {

  // var options = {
  //   method: 'GET',
  //   url: 'https://viperscore.p.rapidapi.com/sports',
  //   headers: {
  //     'x-rapidapi-host': 'viperscore.p.rapidapi.com',
  //     'x-rapidapi-key': "92513a2285mshdac3e54d0ed6625p13832ajsn852959549d6a"
  //   }
  // };
  
  // const plData = await axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const tableOptions = {
    method: "GET",
    url: "/.netlify/functions/plTableAPI"
  };
  const plData = await axios.request(tableOptions).catch(function (error) {
    console.error( error);
  });
  console.log("client side call: ", plData)
  return plData
}

export { tableAPI };
