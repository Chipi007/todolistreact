import React, { useState } from 'react'
import { useCallback } from 'react';

import s from './Header.module.scss';
import HeaderBtn from './HeaderBtn';
import HeaderDay from './HeaderDay';
import Modal from './Modal';


const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = useCallback(() => setModalActive(true), []) //при пустом массиве зависимостей нет warning'ов. А если ставлю [modalActive], то пишет, что такая зависимость не требуется.

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