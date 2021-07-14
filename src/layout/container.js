import React from 'react';

import styles from '../assets/styles/modules/layout.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  )
}