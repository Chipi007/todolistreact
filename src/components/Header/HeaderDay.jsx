import React from 'react'

import s from './Header.module.css';
import { months, weekdays } from '../../constants';

const HeaderDay = () => {

  let day = new Date();

  return (
    <div className={s.dateWrapper}>
         <div className={s.dateContainer}>
            {months[day.getMonth()]} {day.getDate()}, {day.getFullYear()}
         </div>
         <div className={s.weekdayContainer}>
            {weekdays[day.getDay()]}
         </div>
            
    </div>

  )
}

export default HeaderDay