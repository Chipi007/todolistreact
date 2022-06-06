import React, { useState } from 'react'

import styles from './Header.module.css';
import HeaderBtn from './HeaderBtn';
import HeaderDay from './HeaderDay';
import Modal from './Modal';


function Header() {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () =>{
    setModalActive(true);
  }

  return (
    <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
            <HeaderDay />
            <HeaderBtn handleClick = {openModal}/>
        </div>
        <Modal modalType = 'add' modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  )
}

export default Header