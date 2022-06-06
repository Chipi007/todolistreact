import React from 'react'

import styles from './Note.module.css';

function NoteComment({filteredTasks}) {
  const endingWord = (number, words) => {  
    var cases = [2, 0, 1, 1, 1, 2];  
    return words[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]]; 
  }

  return (
    <div className={styles.noteComment}>{filteredTasks.length === 0 ? 'Все задачи выполнены' : 'Сегодня не выполнено еще ' + filteredTasks.length + ' ' + endingWord(filteredTasks.length, ['задача', 'задачи', 'задач'])}</div>
  )
}

export default NoteComment