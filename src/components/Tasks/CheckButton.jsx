import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react'
import s from './Tasks.module.scss';
import {boxVariants, checkVariants } from '../../constants';

const CheckButton = ({checked, handleCheck}) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div className={s.svgBox} 
      variants = {boxVariants}
      animate = {checked ? 'checked' : 'unchecked'}
      onClick = {(handleCheck)}
      >
        <motion.svg className={s.svg}
            width="25"
            height="25"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
        <motion.path 
            variants = {checkVariants}
            animate = {checked ? 'checked' : 'unchecked'}
            style = {{pathLength, opacity}}
            d="M24.1667 0.979156L8.12501 17.0208L0.833344 9.72916"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        </motion.svg>
    </motion.div>
  )
}

export default CheckButton