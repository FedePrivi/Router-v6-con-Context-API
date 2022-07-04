import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"

const App = () => {

  return (
    <>

      <Navbar />

      <div className="container">
          React router V6
          <Outlet/>
      </div>

          
    </>
  )
}

export default App




