import { api } from "../config/http";

export class MoviesService {
	static getMovies() {
		return api.get("movie/popular");
	}
	static getMovieDetail(movieId) {
		return api.get(`movie/${movieId}`);
	}
}
