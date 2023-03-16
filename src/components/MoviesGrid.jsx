import { useEffect, useState } from "react";
//import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(()  => {
    fetch("https://api.themoviedb.org/3/discover/movie" , {
      headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmY3NzA0Nzc4MTA3ZDg2YTEwYzBhOGQ4Mzk4NmFjMSIsInN1YiI6IjY0MTMwYTc1ZTE4ZTNmMDdlOTU0YmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.359_yc09HWlkWBZJOfUZmzzd-UQM01Zkv3e4uu2A4Uk",
        "Content-Type": "application/json;charset=utf-8" ,
      },
    })
    .then((result) => result.json())
    .then((data) => {
      setMovies(data.results);
    });
  }, []);
    
  

 // useEffect(() => { //cuando mi componen se cargue, se ejecutara mi useEffect (efecto secundario)
   // get("/discover/movie").then((data) => {
     // setMovies(data.results);
   // });
 // }, []);
 

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

//con funcion => 

 //traducimos cada objeto a un LI y luego lo mapeamos
