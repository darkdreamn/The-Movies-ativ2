import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MoviesService } from "../../api/MoviesService";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
	const [movie, setMovie] = useState({})
	const params = useParams();

	useEffect(() => {
		MoviesService.getMovieDetail(params.movieId)
			.then(({ data }) => setMovie(data))
	}, [params.movieId])

	return (
		<article className={styles.movie}>
			<MovieImage path={movie.poster_path} size={500} />

			<div className={styles.movieInfo}>
				<h1>{movie.title}</h1>

				<div className={styles.movieDescription}>
					{movie.overview}
				</div>
			</div>
		</article>
	)
}
