import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { MovieImage } from "../MovieImage/MovieImage";

export function MovieItem({ movie }) {
	return (
		<div className={styles.movie}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
				<h3>{movie.title}</h3>
				<MovieImage path={movie.poster_path} />

				<div className={styles.movieInfo}>
					<div id={styles.dataMovie}>
						<span >Lançamento:</span> {movie.release_date}
					</div>
				</div>
			</Link>
		</div>
	)
}
