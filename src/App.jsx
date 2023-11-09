import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[100vh] w-[100vw]'>
   <div className='text-left bg-orange-500 px-8 w-40 h-[98%] my-auto'>
    <ul>
      <div className=' flex bg-red-500 text-green-600 text-2xl py-3'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
</svg>

      <li>Bell Labs</li>
      </div>
      <div className='py-3 text-white text-xl'>
      <li>Dashboard</li>
      </div>
      <div className='py-3 text-white text-xl'>
      <li>Projects</li>
      </div>
      <div className='py-3 text-white text-xl'>
      <li>Tasks</li>
      </div>
      <div className='py-3 text-white text-xl'>
      <li>Services</li>
      </div>
      <div className='py-3 text-white text-xl'>
      <li>Chat</li>
      </div>
    </ul>
   </div>
    
      </div>
  )
}

export default App
