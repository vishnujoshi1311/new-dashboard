import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='  text-6xl text-blue-500 underline'>
            true detective
        </div>
    </div>
  )
}

export default App
