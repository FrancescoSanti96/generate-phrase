import { Link } from "gatsby";
import * as React from "react";
import { useState, useEffect } from "react";

const WordPage = ({ serverData }) => {
  // per prelevare i valori contenuti nella checkbox selezionate
  const [words, setWords] = useState([]);
  //prelevare la props della chiamata api
  const { title } = serverData;
useEffect(() => {
  console.log(words)
}, [words])

  return (
    <>
      {/* rimuovere */}
      {/* <Link to="/">HOME</Link> */}

      <fieldset>
        <legend>
          <h1>Seleziona le parole per comporrere la frase:</h1>
        </legend>

        {title.map((item, i) => (
          <div key={i}>
            <input type="checkbox" id={item.title} name={item.title} 
            onChange={(e) => {
                // add to list
                if (e.target.checked) {
                  setWords([
                    ...words,
                    {
                      id: item.id,
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
      <Link to="/phrase" > 
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
