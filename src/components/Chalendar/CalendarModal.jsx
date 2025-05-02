import React from 'react'
import { createPortal } from 'react-dom'

const CalendarModal = ({children , setIsModalOpen}) => {
  return  createPortal(<div  className='fixed h-[100vh] w-[100vw] bg-slate-900 bg-opacity-40 z-40 '>
        {children}
      </div> , document.getElementById("modal"))
 
}

export default CalendarModal
