import React from 'react'
import { motion } from 'framer-motion';

import s from './Tasks.module.css';
import Pen from "../../images/Pen.svg";
import { shakeBtn, shakeImg } from '../../constants';


const ButtonChange = ({handleChange}) => {
    return (
    <motion.button type='button' className={[s.btnTask, s.btnChange].join(' ')} onClick = {handleChange} variants = {shakeBtn} whileHover='hover'>
        <motion.img src = {Pen} alt = 'change btn' variants={shakeImg}/>
    </motion.button>
    )
}

export default ButtonChange