const axios = require('axios');

function getSummoner(req, res, API_KEY) {
    const { region, account, getBy } = req.params;

    const API_URL_HEAD = `https://${region}.api.riotgames.com`;
    const API_URL_END = `?api_key=${API_KEY}`
    
    const getMethods = {
      encryptedAccountId: `/lol/summoner/v4/summoners/by-account/`,
      summonerName: `/lol/summoner/v4/summoners/by-name/`,
      encryptedPUUID: `/lol/summoner/v4/summoners/by-puuid/`,
      encryptedSummonerId: `/lol/summoner/v4/summoners/`
    }
    
    const API_URL = API_URL_HEAD+getMethods[getBy]+account+API_URL_END;
    
    axios.get(encodeURI(API_URL), {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(response => res.send(response.data))
      .catch(err => res.send(err));    
}

module.exports = getSummoner;
