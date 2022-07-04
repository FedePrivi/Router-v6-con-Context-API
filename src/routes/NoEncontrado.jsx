import { Link } from "react-router-dom"

const NoEncontrado = () => {
  return (
    <>
        <h1>404</h1>
        <Link to="/" className="btn btn-outline-primary">Inicio</Link>
    </>
  )
}

export default NoEncontrado