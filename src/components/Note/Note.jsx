import React from 'react'

import s from './Note.module.css';

import NoteTitle from './NoteTitle'
import NoteTasks from './NoteTasks'
import NoteComment from './NoteComment';
import NoteButton from './NoteButton';
import { useSelector } from 'react-redux';


const Note = () => {

  const tasks = useSelector((state) => state.todo.tasks);
  const filteredTasks = tasks.filter(task => task.completed === false);

  return (
    <div className={s.noteWrapper}>
        <div className={s.noteContainer}>
            <NoteTitle>Памятка</NoteTitle>
            <NoteTasks />
        </div>
        <NoteComment tasks = {tasks} filteredTasks = {filteredTasks}/>
        <NoteButton/>
    </div>
  )
}

export default Note