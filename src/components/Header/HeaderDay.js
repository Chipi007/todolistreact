import React from 'react'

import styles from './Header.module.css';

function HeaderDay() {

    let months = ['Январь', 'Февраль', 'Март', 
               'Апрель', 'Май', 'Июнь', 'Июль', 
               'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let weekdays =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let day = new Date();

  return (
    <div className={styles.dateWrapper}>
         <div className={styles.dateContainer}>
            {months[day.getMonth()]} {day.getDate()}, {day.getFullYear()}
         </div>
         <div className={styles.weekdayContainer}>
            {weekdays[day.getDay()]}
         </div>
            
    </div>

  )
}

export default HeaderDay