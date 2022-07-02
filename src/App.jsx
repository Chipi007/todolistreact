import React from 'react'

import s from './Page.module.css';

import Note from "./components/Note/Note";
import MainTitle from "./components/Title/Title";
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

const App = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <MainTitle>To-Do List</MainTitle>
        <div className={s.content}>
          <Note />
          <div className={s.mainPart}>
              <Header />
              <Tasks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
