import React from 'react'

import styles from './Note.module.css';

function NoteImage(props) {
  return (
    <div className={styles.noteImage}>
        <img src = {props.src} alt = {props.alt} />
    </div>
  )
}

export default NoteImage