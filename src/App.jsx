import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
       <h1 className='text-3xl text-center font-bold text-black'>Course Registration</h1>
       <Cards></Cards>
     </div>
    </>
  )
}

export default App
