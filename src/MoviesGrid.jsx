import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() {
  return (
 /* <ul>
    {movies.map(function(movie) {
       return <li>{movie.title}</li>
    })}
  </ul>
  ); */
  <ul> 
    {movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
    ))}
  </ul>
  );
}  
//con funcion => 

 //traducimos cada objeto a un LI y luego lo mapeamos
