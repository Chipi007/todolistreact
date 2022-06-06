import React from 'react'

import styles from './Note.module.css';

import NoteImage from './NoteImage';
import NoteText from './NoteText';

function NoteTask(props) {
  return (
    <div className={styles.noteTask}>
        <NoteImage src = {props.type.photo} alt = {props.type.alt}></NoteImage>
        <NoteText>{props.type.text}</NoteText>
    </div>
  );
}

export default NoteTask