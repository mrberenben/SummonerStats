import React from 'react';

export default function HeroBanner({ styles }) {
  return (
    <div className={styles.heroBanner}>
      <span className={styles.mainTitle}>SummonerStats</span>
      <span className={styles.subTitle}>for League of Legends</span>
      <p className={styles.mainContent}>SummonerStats is a multi-language open-source project that allows League of Legends players to review statistics of their accounts, past games or information about the game.</p>
    </div>
  )
}
