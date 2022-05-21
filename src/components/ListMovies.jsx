import React,{useEffect,useState} from "react"
import  {doc,getDocs,deleteDoc} from 'firebase/firestore'
import {db } from '../lib/init-firebase'
import '../App.css';
import { movieCollectionRef } from "../lib/firestore.collections";
export default function ListMovies()
{
  const [movies,setMovies] = useState([])

  useEffect(()=>
  {
      getMovies()
  },[])

  useEffect(() =>{
  console.log(movies)},[movies])

  function getMovies()
  {
     getDocs(movieCollectionRef).then(response=>
        {
            const films = response.docs.map(doc =>(
                {
                    data:doc.data(),
                    id:doc.id,
                }
            ))
            setMovies(films)
        }).catch(error=>console.log(error.message))

  }
  function deleteMovie(id)
  {
      const docRef = doc(movieCollectionRef,id)
      deleteDoc(docRef).then(()=>console.log('document Deleted')).catch((error)=> console.log(error))
  }
  return (
<div>
    <h4>ListMovies</h4>
    <ol>
        {movies.map(movie=>
            (
                <div className="movieCard">
            <li key={movie.id}>{movie.data.Name} <br/> {movie.data.Editor} <br/> {movie.data.Year} <br/></li>
              <button onClick={()=> deleteMovie(movie.id)}>Delete</button>
             </div>
            ))}
    </ol>
</div>
)

}