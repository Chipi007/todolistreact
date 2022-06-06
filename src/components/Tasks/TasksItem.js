import React, { useEffect, useState } from 'react'

import styles from './Tasks.module.css';

import Briefcase from "../../images/Briefcase.svg";
import Lotos from "../../images/PersonLotos.svg";
import People from "../../images/WomanAndMan.svg";
import ButtonDelete from './ButtonDelete';
import ButtonChange from './ButtonChange';
import Modal from '../Header/Modal';
import CheckButton from './CheckButton';
import { useDispatch } from 'react-redux';
import { updateTodo} from '../../redux/slices/todoSlice';

function TasksItem({todo}) {
    const dispatch = useDispatch();

    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setUpdateModalOpen(true)
    }

    useEffect(() => {
      if(todo.completed === true){
        setChecked(true);
      }
      else{
        setChecked(false);
      }
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
      dispatch(updateTodo({...todo, completed: checked ? false : true}));
    }

  return (
    <div>
      <div className={styles.taskContainer}>
          <div className={styles.taskCheckbox}>
              <CheckButton checked = {checked} handleCheck = {handleCheck}></CheckButton>
          </div>
          <div className={todo.completed === false ? styles.taskImage : styles.taskImageCompleted}>
              {neededPhoto()}
          </div>
          <div className={todo.completed === false ? styles.taskText : styles.taskTextCompleted}>{todo.description}</div>
          <div className={styles.taskButtons}>
            <ButtonChange handleChange={handleChange}/>
            <ButtonDelete todo = {todo}/>
          </div>
      </div>
      <Modal todo = {todo} modalType='update' modalActive ={updateModalOpen} setModalActive={setUpdateModalOpen}/>
    </div>
  )
}

export default TasksItem