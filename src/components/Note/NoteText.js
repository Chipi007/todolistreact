import React from 'react'

import styles from './Note.module.css';

function NoteText(props) {
  return (
    <div className={styles.noteText}>
        {props.children}
    </div>
  )
}

export default NoteText