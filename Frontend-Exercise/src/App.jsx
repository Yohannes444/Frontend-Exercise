import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Users } from './Users'

function App() {
  const dispatch= useDispatch()
  // const users= useSelector(state => state.firstSaga.users)

  return (
    <>
   <p>hhh</p>
        <button>getsuser</button>
        <Users/>
    </>
  )
}

export default App
