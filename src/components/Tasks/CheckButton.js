import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react'
import styles from './Tasks.module.css';

const checkVariants = {
  initial: {
    stroke:  'rgba(255, 255, 255, 0)'
  },
  checked: {
    pathLength: 1,
    stroke:  'rgba(255, 255, 255, 1)',
    transition: {duration: 0.2}
    
  },
  unchecked: {
    pathLength: 0,
    stroke:  'rgba(255, 255, 255, 0)',
    transition: {duration: 0.2}
  }
}

const boxVariants = {
  checked: {
    backgroundColor: 'rgba(242, 198, 122, 1)',
  },
  unchecked: {
    backgroundColor: 'rgba(242, 198, 122, 0)',
    border: '2px #F2C67A solid',
  }
}
function CheckButton({checked, handleCheck}) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div className={styles.svgBox} 
      variants = {boxVariants}
      animate = {checked ? 'checked' : 'unchecked'}
      onClick = {(handleCheck)}
      >
        <motion.svg className={styles.svg}
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