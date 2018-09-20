export function filter(movies, currentGenre) {
    return movies.filter((movie) => (movie.genre.name === currentGenre))
}