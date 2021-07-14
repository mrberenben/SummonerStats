const express = require('express');
const cors = require('cors')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');

const getSummoner = require("./routes/getSummoner")
const getMatches = require("./routes/getMatches")

const router = express.Router();
const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

const API_PORT = 3001; // server running port.
const API_KEY = 'RGAPI-7135578a-6d4b-4f75-94f9-d1a59636bfd0'; // your riot games api key.


/*
  * @param getBy
  * The methods of getting summoner in SUMMONER-V4 API https://developer.riotgames.com/apis#summoner-v4
  * encryptedAccountId, summonerName, encryptedPUUID, encryptedSummonerId
  * 
  * @param region
  * Searched summoner's region
  * 
  * @param account
  * The search parameter to get user by selected method
*/
router.get('/getSummoner/:getBy/:region/:account', (req, res) => {
  getSummoner(req, res, API_KEY);
});

/*
  * MATCH-V5 API https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
  * @param region
  * Searched summoner's region 
  * ASIA, AMERICAS, EUROPE
  *   
  * @param
  * Summoner's puuid 
  *
*/
router.get('/getMatches/:region/:puuid', (req, res) => {
  getMatches(req, res, API_KEY)
})

app.use('/', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));