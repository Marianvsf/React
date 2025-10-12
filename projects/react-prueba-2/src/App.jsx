import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" action="submit">
          <input placeholder="Avengers, Matrix, Harry Pott..."></input>
          <button>Buscar</button>
        </form>
      </header>
      <main>movies</main>
    </div>
  );
}

export default App;
