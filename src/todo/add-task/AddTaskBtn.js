import React from 'react'
import '../styles/button.css'

import '../styles/modal.css'



import { useState } from 'react';
import Modal from '../modal/Modal';
import { blue, yellow } from '@mui/material/colors';


export default function AddTaskBtn(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    console.log(isOpen);
   
    setIsOpen(!isOpen);
    console.log("open a model");
  };

  return (
    <>
       
        <button onClick={()=> toggleModal()} className='add-button'>
            +
        </button>

        {isOpen && <Modal isOpen={isOpen} addTask = {props}/>}
    </>
  )
}
