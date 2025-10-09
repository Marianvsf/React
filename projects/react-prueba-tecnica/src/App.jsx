import { useEffect, useState } from "react";
import "./style.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
//const CAT_ENDOPOINYT_IMAG_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/says";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  {
    /* 
  useEffect(() => {
    async function getRandomFat() {
      const res = await fetch(CAT_ENDOPOINYT_RANDOM_FACT);
      const data = await res.json();
      setFact(data.fact);
    }
    getRandomFat();
  }, []);
*/
  }
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

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
      });
  }, []);

  return (
    <main>
      <h1>App de Gatitos</h1>
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
