import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../redux/slices/todoSlice';

import styles from './Note.module.css';

function NoteButton() {
  
  const filterStatus = useSelector((state) => state.todo.filterStatus)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch(filterStatus){
      case 'filtered':
        e.target.value = 'all';
        dispatch(updateFilterStatus(e.target.value));
        console.log(e.target.value);
        break;
      case 'all':
        e.target.value = 'filtered';
        dispatch(updateFilterStatus(e.target.value));
        console.log(e.target.value);
        break;
      default:
        return '';
    }
  }
  return (
      <button type = 'button' value = {filterStatus} className={styles.noteButton} onClick = {handleClick}>{filterStatus === 'all' ? 'Активные' : 'Все задачи'}
      </button>
  )
}

export default NoteButton