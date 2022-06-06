import React from 'react'
import { motion } from 'framer-motion';

import styles from './Tasks.module.css';
import Pen from "../../images/Pen.svg";

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

function ButtonChange({handleChange}) {
    return (
    <motion.button type='button' className={[styles.btnTask, styles.btnChange].join(' ')} onClick = {handleChange} variants = {shakeBtn} whileHover='hover'>
            <motion.img src = {Pen} alt = 'change btn' variants={shakeImg}/>
    </motion.button>
    )
}

export default ButtonChange