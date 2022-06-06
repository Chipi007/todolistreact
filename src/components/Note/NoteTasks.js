import React from 'react'

import styles from './Note.module.css';

import Briefcase from "../../images/Briefcase.svg";
import Lotos from "../../images/PersonLotos.svg";
import People from "../../images/WomanAndMan.svg";

import NoteTask from './NoteTask';

function NoteTasks() {
    const types = [
        {
            id: 1,
            photo: Briefcase,
            text: 'рабочие задачи',
            alt: 'Briefcase'
        },
        {
            id: 2,
            photo: Lotos,
            text: 'досуг',
            alt: 'Lotos'
        },
        {
            id: 3,
            photo: People,
            text: 'семейные задачи',
            alt: 'People'
        }
    ]

    return(
        <div className={styles.noteTasks}>
            {types.map(type =><NoteTask key = {type.id} type={type}></NoteTask>)}
        </div>
    );
}

export default NoteTasks