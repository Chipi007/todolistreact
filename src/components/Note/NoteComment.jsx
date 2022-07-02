import React from 'react'

import s from './Note.module.scss';

const NoteComment = ({filteredTasks}) => {
  const endingWord = (number, words) => {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return words[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]]; 
  }

  return (
    <div className={s.noteComment}>{filteredTasks.length === 0 ? 'Все задачи выполнены' : 'Сегодня не выполнено еще ' + filteredTasks.length + ' ' + endingWord(filteredTasks.length, ['задача', 'задачи', 'задач'])}</div>
  )
}

export default NoteComment