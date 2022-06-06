import React from 'react'

import styles from './Page.module.css';

import Note from "./components/Note/Note";
import MainTitle from "./components/Title/Title";
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MainTitle>To-Do List</MainTitle>
        <div className={styles.content}>
          <Note />
          <div className={styles.mainPart}>
              <Header />
              <Tasks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
