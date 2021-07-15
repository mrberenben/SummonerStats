const axios = require('axios');

const regions = require("../misc/regions.json")


function getMatches(req, res, API_KEY) {
    const { puuid, region } = req.params;

    // Using routed region instead of server name.
    const API_URL = `https://${regions[region]}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${API_KEY}`;
           
    axios.get(encodeURI(API_URL), {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(response => res.send(response.data))
      .catch(err => res.send(err));    
}

module.exports = getMatches;
