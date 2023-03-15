import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
    console.log(styles);
     const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_
    return (
          <li className = {styles.movieCard}>
       <img className={styles.movieImage} alt={movie.title} />
     <div>{movie.title}</div>
       </li>
    );
}

