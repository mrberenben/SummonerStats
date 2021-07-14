import React, { useState, useEffect, createContext } from 'react';

export const RootContext = createContext({});

export default function RootContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('tr1');

  useEffect(() => {
    const searchInput = document.getElementById('summonerSearchInput');
    const searchSubmitButton = document.getElementById('summonerSearchButton');

    document.addEventListener('keydown', e => {
      switch(e.keyCode) {
        case 83:
          if(searchInput !== document.activeElement) {
            searchInput.focus();
            e.preventDefault();
          }
          break;
        case 13:
          searchSubmitButton && searchSubmitButton.click();
          break;
        default: break;
      }
    });

    return () => document.removeEventListener('keydown');
  }, []);

  const provider = {
    searchQuery,
    setSearchQuery,
    region,
    setRegion
  }

  return (
    <RootContext.Provider value={provider}>
      {children}
    </RootContext.Provider>
  )
}
