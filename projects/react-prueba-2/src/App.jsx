import "./App.css";
import { useMovies } from "../../03-mouse-follower/src/hooks/useMovies.js";
import { Movies } from "./components/Movies.jsx";

function App() {
  const { movies: mappedMovies } = useMovies();
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" action="submit">
          <input placeholder="Avengers, Matrix, Harry Pott..."></input>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
