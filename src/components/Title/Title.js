import React from 'react';

import styles from './Title.module.css';

function MainTitle({children}) {
  return (
    <div className={styles.pageTitle}>{children}</div>
  )
}

export default MainTitle