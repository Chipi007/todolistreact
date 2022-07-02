import React from 'react'

import s from './Note.module.scss';

const NoteText = (props) => {
  return (
    <div className={s.noteText}>
        {props.children}
    </div>
  )
}

export default NoteText