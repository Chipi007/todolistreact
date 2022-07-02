import React from 'react'

import s from './Note.module.scss';

const NoteImage = (props) => {
  return (
    <div className={s.noteImage}>
        <img src = {props.src} alt = {props.alt} />
    </div>
  )
}

export default NoteImage