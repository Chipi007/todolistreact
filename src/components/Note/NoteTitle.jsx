import React from 'react'

import s from './Note.module.css';

const NoteTitle = (props) => {
  return (
    <div className={s.noteTitle}>
        {props.children}
    </div>
  )
}

export default NoteTitle