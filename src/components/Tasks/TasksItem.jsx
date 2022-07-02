import React, { useEffect, useState } from 'react'

import s from './Tasks.module.scss';

import Briefcase from "../../images/Briefcase.svg";
import Lotos from "../../images/PersonLotos.svg";
import People from "../../images/WomanAndMan.svg";
import ButtonDelete from './ButtonDelete';
import ButtonChange from './ButtonChange';
import Modal from '../Header/Modal';
import CheckButton from './CheckButton';
import { useDispatch } from 'react-redux';
import { updateTodo} from '../../redux/slices/todoSlice';

const TasksItem = ({todo}) => {
    const dispatch = useDispatch();

    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setUpdateModalOpen(true)
    }

    useEffect(() => {
      setChecked(todo.completed);
    }, [todo.completed]);

    const WORKING_TASKS = 'work';
    const FAMILY_TASKS = 'family';
    const RELAX_TASKS = 'relax';

    const neededPhoto = () => {
        switch(todo.taskType) {
          case WORKING_TASKS: return <img src={Briefcase} alt='Briefcase'/>;
          case FAMILY_TASKS: return <img src={People} alt='People'/>;
          case RELAX_TASKS: return <img src={Lotos} alt='Lotos'/>;
          default: return <img src={Briefcase} alt='Briefcase'/>;
        }
      }

    const handleCheck = () => {
      setChecked(!checked);
      dispatch(updateTodo({...todo, completed: !checked}));
    }

  return (
    <div>
      <div className={s.taskContainer}>
          <div className={s.taskCheckbox}>
              <CheckButton checked = {checked} handleCheck = {handleCheck}></CheckButton>
          </div>
          <div className={!todo.completed ? s.taskImage : s.taskImageCompleted}>
              {neededPhoto()}
          </div>
          <div className={!todo.completed ? s.taskText : s.taskTextCompleted}>{todo.description}</div>
          <div className={s.taskButtons}>
            <ButtonChange handleChange={handleChange}/>
            <ButtonDelete todo = {todo}/>
          </div>
      </div>
      <Modal todo = {todo} modalType='update' modalActive ={updateModalOpen} setModalActive={setUpdateModalOpen}/>
    </div>
  )
}

export default TasksItem