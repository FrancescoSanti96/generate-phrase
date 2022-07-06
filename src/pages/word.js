import { Link } from "gatsby";
import * as React from "react";
import { useState, useEffect } from "react";

const WordPage = ({ serverData }) => {
  // per prelevare i valori contenuti nella checkbox selezionate
  const [words, setWords] = useState([]);
  let prova = "ciao"
  //prelevare la props della chiamata api
  const { title } = serverData;
useEffect(() => {
  console.log(Object.values(words))
}, [words])

  return (
    <>
      {/* rimuovere */}
      {/* <Link to="/">HOME</Link> */}

      <fieldset>
        <legend>
          <h1>Seleziona le parole per comporrere la frase:</h1>
        </legend>
        {/* creo una map per ogni valore prelevato con l'api e creou una checkbox */}
        {title.map((item, i) => (
          <div key={i}>
            <input type="checkbox" id={item.title} name={item.title} 
            // monitoro quando vine seleziona e deselezionata per aggiugnere o rimuovere il valore
            onChange={(e) => {
                // add to list
                if (e.target.checked) {
                  setWords([
                    ...words,
                    {
                      id: item.title,
                    }
                  ]);
                } else {
                  // remove from list
                  setWords(
                    words.filter((word) => word.id !== item.id),
                  );
                }
              }}
            />
            <label htmlFor={item.title}>{item.title}</label>
            <br></br>
          </div>
        ))}

      </fieldset>
      {/* TODO */}
      {/* solo se è stata selezionato almeno 1 valore aggiugi il bottone per andate avanti */}
      {/* state permette di passare come props dei valori e poi richiamarli nella pagina con il location */}
      <button
      onClick={()=> {
        // console.log(JSON.stringify(words))
        setWords(JSON.stringify(words))
        // localStorage.setItem("val", JSON.stringify(words));
      }}
      >prova</button>
      <Link to="/phrase" state={{ test: words }}> 
        Phrase
      </Link> 
    </>
  );
};

export async function getServerData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const data = await res.json();

  return {
    props: {
      title: data,
    },
  };
}

export default WordPage;
