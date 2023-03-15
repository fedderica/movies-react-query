import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails(){
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={styles.detailsContainer}>
    <img src={imageUrl} alt={movie.title} />
    <div>
        <p>Title: {movie.title} </p> 
        <p> Description: {movie.overview} </p>
        </div>
        </div>
    );
}