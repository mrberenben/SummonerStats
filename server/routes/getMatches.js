const axios = require('axios');

function getMatches(req, res, API_KEY) {
    const { puuid, region } = req.params;

    // The AMERICAS routing value serves NA, BR, LAN, LAS, and OCE.
    // The ASIA routing value serves KR and JP.
    // The EUROPE routing value serves EUNE, EUW, TR, and RU.
    const regions = {
        TR1: "EUROPE",
        EUN1: "EUROPE",
        EUW1: "EUROPE",
        RU: "EUROPE",
        NA1: "AMERICAS",
        BR1: "AMERICAS",
        LA1: "AMERICAS",
        LA2: "AMERICAS",
        OC1: "AMERICAS",
        JP1: "ASIA",
        KR: "ASIA"
    }

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
