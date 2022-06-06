import React from 'react'

import styles from './Tasks.module.css';
import Cross from "../../images/Cross.svg";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/slices/todoSlice';
import { motion } from 'framer-motion';

const shakeImg = {
    hover: {
        rotate: 90
    },
    initial: {
        rotate: 0
    }
}

const shakeBtn = {
    hover: {
        rotate: 0
    }
}

function ButtonDelete({todo}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }  
    return (
    <motion.button type='button' className={styles.btnTask} onClick = {handleDelete} variants = {shakeBtn} whileHover='hover'>
            <motion.img src = {Cross} alt = 'delete btn' variants={shakeImg}/>
    </motion.button>
    )
}

export default ButtonDelete