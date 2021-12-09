import axios from "axios";

var options = {
  method: 'GET',
  url: 'https://viperscore.p.rapidapi.com/competition/standings',
  params: {competitionId: '17', seasonId: '37036'},
  headers: {
    'x-rapidapi-host': 'viperscore.p.rapidapi.com',
    'x-rapidapi-key': '176422e431msh80623a6b50ada5fp135307jsnab52c5c4c171'
  }
};

function tableAPI() { 
    return axios.request(options).catch(function (error) {
	console.error(error);
});
}
export default tableAPI