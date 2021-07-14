import React from 'react';

import SummonerContextProvider from '../context/summonerContext';

// LAYOUT
import Container from '../layout/container';

export default function SummonerPage() {
  return (
    <SummonerContextProvider>
      <main className="page" role="main">
        <Container>
          summonerpage
        </Container>
      </main>
    </SummonerContextProvider>
  )
}