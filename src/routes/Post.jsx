import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Post = () => {

    let params = useParams()
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) {
        return <h2>Loading...</h2>
      }
  
      if (error !== "") {
        return {error}
      }

  return (
    <>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
    </>
  )
}

export default Post