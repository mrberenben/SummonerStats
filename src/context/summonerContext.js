import React, { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../config.json';

export const SummonerContext = createContext({});

export default function SummonerContextProvider({ children }) {
  const { region, summonerName } = useParams();
  const [summonerData, setSummonerData] = useState({});

  useEffect(() => {
    _getSummoner();
  }, [])

  const _getSummoner = async () => (
    await axios.post(`${API_URL}/getSummoner`, {
      region,
      summonerName
    })
    .then(({ data }) => setSummonerData(data))
    .catch(err => console.log(err))
  );

  const provider = {
    summonerData
  };

  return (
    <SummonerContext.Provider value={provider}>
      { children }
    </SummonerContext.Provider>
  )
}
