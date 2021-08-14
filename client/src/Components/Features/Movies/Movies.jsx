import {useState,useEffect} from 'react';

function Movies() {
const [movies,setMovie] = useState([]);
 function getMovies(){
   fetch("https://mern-app-21.herokuapp.com/student")
    .then(res => res.json())
    .then(res => setMovie(res))
    .catch(err => console.log(err))
} 
    useEffect(getMovies,[])
    return (
        <div>
        {
            movies.map((item,key)=>{
            return <h1 key={key}>{item.lastName}</h1>
            })
        }
        </div>
    );
}

export default Movies;