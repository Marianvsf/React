import { useEffect, useRef } from "react";

function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  const isFirtsRender = useRef(true);

  useEffect(() => {
    isFirtsRender.current = false;
  }, []);

  if (isFirtsRender.current) {
    return (
      <div className="nomovies">
        <h4>¡Bienvenido! Busca tus películas favoritas.</h4>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11327/11327060.png"
          alt="cotufas"
        />
      </div>
    );
  }
  return <h4>No se encontraron peliculas para esta búsqueda</h4>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
