import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className='h-screen bg-slate-300 flex items-center justify-center '>
      <Card/>
    </div>
    </>
  )
}

export default App
