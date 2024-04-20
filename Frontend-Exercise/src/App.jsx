
import './App.css'

import RegisterUser from './component/RegisterUser.jsx'
import GetAllUsers from './component/getuser.jsx'
function App() {
  
  return (
    <>
        <RegisterUser/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

        <GetAllUsers/>

    </>
  )
}

export default App
