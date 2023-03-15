import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
    console.log(styles);
     const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_
    return (
          <li className = {styles.movieCard}>
       <img
       width={230}
       height={345}
      className={styles.movieImage} 
      src={imageUrl}
      alt={movie.title}
    
      />
     <div>{movie.title}</div>
       </li>
    );
}

