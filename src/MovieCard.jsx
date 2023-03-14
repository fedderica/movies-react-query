import styles from "./MoviesCard.module.css";
export function MovieCard({ movie }) {
    console.log(styles);
     const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_
    return (
          <li className = {styles.movieCard}>
       <img src={imageUrl} alt={movie.title} />
     <div>{movie.title}</div>
       </li>
    );
}

