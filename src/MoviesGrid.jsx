import movies from "./movies.json";

export function MoviesGrid() {
  return (
  <ul>
    {movies.map(function(movie) {
       return <li>{movie.title}</li>
    })}
  </ul>
  );
}
 //traducimos cada objeto a un LI y luego lo mapeamos
 