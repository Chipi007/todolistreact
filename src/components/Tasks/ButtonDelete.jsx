import React from 'react'

import s from './Tasks.module.css';
import Cross from "../../images/Cross.svg";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/slices/todoSlice';
import { motion } from 'framer-motion';
import { shakeBtn, shakeImg } from '../../constants';


const ButtonDelete = ({todo}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }  
    return (
    <motion.button type='button' className={s.btnTask} onClick = {handleDelete} variants = {shakeBtn} whileHover='hover'>
        <motion.img src = {Cross} alt = 'delete btn' variants={shakeImg}/>
    </motion.button>
    )
}

export default ButtonDelete