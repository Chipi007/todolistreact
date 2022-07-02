import { React, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../redux/slices/todoSlice';

import s from './Note.module.scss';

const NoteButton = () => {

  const filterStatus = useSelector((state) => state.todo.filterStatus)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { value } = e.target;
    dispatch(updateFilterStatus(value === 'all' ? 'filtered' : 'all' ));
  }

  const currentText = useMemo(() => {
    return filterStatus === 'all' ? 'Активные' : 'Все задачи'
  }, [filterStatus])

  return (
      <button type='button' value={filterStatus} className={s.noteButton} onClick={handleClick}>
        {currentText}
      </button>
  )
}

export default NoteButton