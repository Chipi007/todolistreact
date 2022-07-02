import React from 'react';

import s from './Title.module.css';

const MainTitle = ({children}) => {
  return (
    <div className={s.pageTitle}>{children}</div>
  )
}

export default MainTitle