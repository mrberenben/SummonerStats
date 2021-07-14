import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FiSearch, FiGlobe } from 'react-icons/fi'; 
import ReactTooltip from 'react-tooltip';

import { RootContext } from '../../context/rootContext';
import RegionPopup from './regionPopup';

export default function SearchArea({ styles }) {
  const { searchQuery, setSearchQuery, region, setRegion } = useContext(RootContext);
  const [regionPopupVisibility, setRegionPopupVisibility] = useState(false);

  const _handleInputChange = e => setSearchQuery(e.target.value);

  const _handleSearchPath = () => searchQuery ? `/summoner/${region}/${searchQuery}` : '/';

  return (
    <div className={styles.searchArea}>
      <div className={styles.searchInput}>
        <input 
          id="summonerSearchInput"
          type="text"
          placeholder="Enter your summoner name"
          value={searchQuery}
          onChange={e => _handleInputChange(e)}
          autoComplete="off"
        />
        <FiSearch />
        <span className={styles.keyListener} data-tip="Press S to focus input.">S</span>
        <ReactTooltip place="top" effect="solid" type="dark" />
      </div>
      <div className={styles.searchActions}>
        <Link 
          id="summonerSearchButton"
          to={_handleSearchPath()}
          title="Search Summoner"
          role="button"
          className={`${styles.actionButton} ${styles.actionButtonPrimary}`}
        >Search Summoner</Link>
        <button type="button" className={`${styles.actionButton} ${styles.actionButtonSecondary}`} onClick={() => setRegionPopupVisibility(true)}>
          <FiGlobe />
          <span>TR</span>
        </button>

        <RegionPopup styles={styles} visible={regionPopupVisibility} setVisible={() => setRegionPopupVisibility()} />
      </div>
    </div>
  )
}