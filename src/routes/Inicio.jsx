import { useContext} from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Inicio = () => {

  const {user, signIn, signOut} = useContext(UserContext)  

  


  return (
    <>
        <h1>Inicio</h1>
        <h2>
          {
            user ? "Conectado" : "Desconectado"
          }
        </h2>
        {
          user ? (
            <>
              <button
                className="btn btn-primary"
                onClick={signOut}
                >Desconectarse
              </button>
                <Link to="/protegida" className="btn btn-warning">Ruta protegida</Link>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={signIn}
              >Acceder
            </button>

          )
        }
    </>
  )
}

export default Inicio