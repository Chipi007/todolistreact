import React from 'react'

import styles from './Note.module.css';

function NoteTitle(props) {
  return (
    <div className={styles.noteTitle}>
        {props.children}
    </div>
  )
}

export default NoteTitle