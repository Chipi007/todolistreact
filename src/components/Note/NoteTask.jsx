import React from 'react'

import s from './Note.module.css';

import NoteImage from './NoteImage';
import NoteText from './NoteText';

const NoteTask = (props) => {
  return (
    <div className={s.noteTask}>
        <NoteImage src = {props.type.photo} alt = {props.type.alt}></NoteImage>
        <NoteText>{props.type.text}</NoteText>
    </div>
  );
}

export default NoteTask