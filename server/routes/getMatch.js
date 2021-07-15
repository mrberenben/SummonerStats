const axios = require('axios');

const regions = require("../misc/regions.json")


function getMatch(req, res, API_KEY) {
    const { matchid } = req.params;

    const [region] = matchid.split("_")

    // Using routed region instead of server name.
    const API_URL = `https://${regions[region]}.api.riotgames.com/lol/match/v5/matches/${matchid}?api_key=${API_KEY}`;
           
    function process(data) {
        delete data.metadata;
        data = data.info
        let participants = data.participants

        data.teams.forEach(team => {
            team.participants = participants.filter(participant => participant.teamId == team.teamId)
        })

        delete data.participants;

        res.json(data);
    }

    axios.get(encodeURI(API_URL), {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then(response => process(response.data))
      .catch(err => res.send(err));    
}

module.exports = getMatch;

