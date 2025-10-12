import "./App.css";
import { Movies } from "./components/Movies.jsx";
import { useRef } from "react";
import { useMovies } from "./hooks/useMovies.js";

function App() {
  const { movies: mappedMovies } = useMovies();
  const inputRef = useRef();

  const handleSummit = (event) => {
    event.preventDefault();
    const inputEl = inputRef.current;
    const value = inputEl.value;
    console.log(value);
  };
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSummit}>
          <input
            ref={inputRef}
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
