import React, { useState } from 'react'

import s from './Header.module.css';
import HeaderBtn from './HeaderBtn';
import HeaderDay from './HeaderDay';
import Modal from './Modal';


const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () =>{
    setModalActive(true);
  }

  return (
    <div className={s.headerWrapper}>
        <div className={s.headerContainer}>
            <HeaderDay />
            <HeaderBtn handleClick = {openModal}/>
        </div>
        <Modal modalType = 'add' modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  )
}

export default Header