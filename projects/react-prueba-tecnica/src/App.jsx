import { useEffect, useState } from "react";
import "./style.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [error, setError] = useState();

  const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) {
          setError("No se ha podido recuperar la cita");
        }
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  };
  useEffect(getRandomFact, []);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWord = fact.split(" ", 3).join(" ");
    console.log(threeFirstWord);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={getRandomFact}>Get new Fact</button>
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
