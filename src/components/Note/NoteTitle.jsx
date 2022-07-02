import React from 'react'

import s from './Note.module.scss';


const NoteTitle = (props) => {
  return (
    <div className={s.noteTitle}>
        {props.children}
    </div>
  )
}

export default NoteTitle