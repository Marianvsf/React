import { useEffect, useState } from "react";
import "./style.css";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";

export function App() {
  const [fact, setFact] = useState();

  const [error, setError] = useState();
  const { imageUrl } = useCatImage({ fact });

  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${imageUrl}`}
          alt={`image extracted using the firts three words for ${fact}`}
        />
      )}
    </main>
  );
}
