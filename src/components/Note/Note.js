import React from 'react'

import styles from './Note.module.css';

import NoteTitle from './NoteTitle'
import NoteTasks from './NoteTasks'
import NoteComment from './NoteComment';
import NoteButton from './NoteButton';
import { useSelector } from 'react-redux';


function Note() {

  const tasks = useSelector((state) => state.todo.tasks);
  const filteredTasks = tasks.filter(task => task.completed === false);

  return (
    <div className={styles.noteWrapper}>
        <div className={styles.noteContainer}>
            <NoteTitle>Памятка</NoteTitle>
            <NoteTasks />
        </div>
        <NoteComment tasks = {tasks} filteredTasks = {filteredTasks}/>
        <NoteButton/>
    </div>
  )
}

export default Note