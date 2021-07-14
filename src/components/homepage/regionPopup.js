import React from 'react';

import { FiX } from 'react-icons/fi';

export default function RegionPopup({ styles, visible, setVisible }) {
  return (
    <div className={`${styles.regionPopup} ${visible ? styles.regionPopupVisible : undefined}`}>
      <div className={styles.popupBackgroundOverlay} onClick={() => setVisible(false)} />
      <button type="button" className={`${styles.closePopup} js-disabled`} onClick={() => setVisible(false)}>
        <FiX />
      </button>
      <div className={styles.regionPopupMain}>
        Language server fln
      </div>
    </div>
  )
}