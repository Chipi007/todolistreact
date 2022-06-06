import React from 'react'
import { motion } from 'framer-motion';

import styles from './Header.module.css';

import Plus from "../../images/Plus.svg";

function HeaderBtn({handleClick}) {
  return (
      <motion.button type='button' className={styles.addBtn} onClick = {handleClick} initial = {{background: '#F2C16B', scale: 1}} whileHover = {{scale: 1.1, transition: {duration: 0.2}}} whileTap = {{background:'#E3940B'}}>
          <img src = {Plus} alt = 'add btn'/>
      </motion.button>
  )
}

export default HeaderBtn