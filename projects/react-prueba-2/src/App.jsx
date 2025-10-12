import { useEffect } from "react";
import "./App.css";
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js";
import { useState } from "react";

function App() {
  const { movies: mappedMovies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSummit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (query.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSummit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Matrix, Harry Pott..."
          ></input>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
