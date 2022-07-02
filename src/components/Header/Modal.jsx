import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/slices/todoSlice';
import {v4 as uuid} from 'uuid';

import s from './Header.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const modalWrapperAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

const Modal = ({modalType, modalActive, setModalActive, todo}) => {
  const [description, setDescription] = useState('');
  const [taskType, setTaskType] = useState('work');
  const dispatch = useDispatch();
  useEffect(() => {
    if(modalType === 'update' && todo){
      setDescription(todo.description);
      setTaskType(todo.taskType);
    }
    else{
      setDescription('');
      setTaskType('work');
    }
  }, [modalType, todo, modalActive])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(description && /^[ ]+$/.test(description) === false && taskType){
      switch(modalType){
        case 'add':
          dispatch(addTodo({
            id: uuid(),
            description: description.trim(),
            taskType,
            completed: false,
          }));
          break;
          case 'update':
            if(todo.description !== description || todo.taskType !== taskType){
              dispatch(updateTodo({...todo, description, taskType}))
            }
            else {
              alert('Нечего менять')
            }
          break;
          default: break;
          }
          setDescription('');
          setModalActive(false);
        }
        else {
          alert('Заполните поле описания задачи')
        }
  };

  return ( 
    <AnimatePresence>
      {modalActive && (
      <motion.div className={s.modalWrapper} onClick ={() => setModalActive(false)} variants = {modalWrapperAnimation} initial = 'hidden' animate = 'visible' exit = 'hidden'>
          <div className={s.modalContainer} onClick ={e => e.stopPropagation()}>
            <div className={s.modalTitle}>{modalType === 'update' ? 'Изменить' : 'Добавить'} задачу</div>
            <form onSubmit = {(e) =>handleSubmit(e)}>
              <label htmlFor='description'>Описание</label>
              <input type="text" id='description' placeholder = "полить цветы" className={s.modalInput} value={description} onChange={(e) => setDescription(e.target.value)}/>
              <label htmlFor='type'>Тип</label>
              <select name="type" id='type' className={s.modalInput} value={taskType} onChange={(e) => setTaskType(e.target.value)}>
                <option value='work'>рабочая задача</option>
                <option value='family'>семейная задача</option>
                <option value='relax'>досуг</option>
              </select>
                <motion.button type='submit' className={s.saveBtn} whileHover = {{scale: 1.1}} whileTap = {{background: 'linear-gradient(90deg, rgba(193, 208, 248, 0.8) 13.45%, rgba(221, 148, 233, 0.672) 140.11%)'}}>
                  {modalType === 'update' ? 'Изменить' : 'Добавить'}
                </motion.button>
            </form>
          </div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal