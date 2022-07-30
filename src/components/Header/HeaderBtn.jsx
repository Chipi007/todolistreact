import React from 'react'
import { motion } from 'framer-motion';

import s from './Header.module.scss';
import Plus from "../../images/Plus.svg";
import { useCallback } from 'react';

const HeaderBtn = ({handleClick}) => {
  const addButtonClick = useCallback(handleClick, [handleClick]) //так правильно писать? функция должна быть в массиве зависимостей? просто нигде такого не видела, но компилятор не ругается.
  return (
      <motion.button type='button' className={s.addBtn} onClick = {addButtonClick} initial = {{background: '#F2C16B', scale: 1}} whileHover = {{scale: 1.1, transition: {duration: 0.2}}} whileTap = {{background:'#E3940B'}}>
          <img src = {Plus} alt = 'add btn'/>
      </motion.button>
  )
}

export default HeaderBtn