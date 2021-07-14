import React from 'react';

import styles from '../assets/styles/modules/homepage.module.css';

// COMPONENTS
import HeroBanner from '../components/homepage/heroBanner';
import SearchArea from '../components/homepage/searchArea';
import LastSearchs from '../components/homepage/lastSearchs';

// LAYOUT
import Container from '../layout/container';

export default function Homepage() {
  return (
    <main className="page" role="main">
      <Container>
        <HeroBanner styles={styles} />
        <SearchArea styles={styles} />
        <LastSearchs styles={styles} />
      </Container>
    </main>
  )
}