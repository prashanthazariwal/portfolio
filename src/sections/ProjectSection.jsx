import React from 'react'
import { PinContainer, PinPerspective } from '../components/ui/3d-pin'

const ProjectSection = () => {
  return (
    <div className='w-full h-screen bg-green-300'> 
      <PinContainer containerClassName={"bg-red-600"}/>
    </div>
  )
}

export default ProjectSection
