import { Link } from "gatsby";
import * as React from "react";
// import { useState, useEffect } from "react";
import { useState } from "react";

const fieldset = {
  border: "inset 4px"
}

const legend= {
  color: "wheat",
  fontSize: "35px",
  margin: "auto"
}

const list = {
  fontSize: "xx-large",
  color: "wheat"
}

const footer = {
  display: "flex",
  justifyContent: "space-between"
}

const footerItem = {
  color: " #330099",
  fontSize: "xx-large",
  // padding: "5px",
  // background: "blueviolet"
}

const WordPage = ({ serverData }) => {
  // per prelevare i valori contenuti nella checkbox selezionate
  const [words, setWords] = useState([]);

  //prelevare la props della chiamata api
  const { title } = serverData;
// useEffect(() => {
//   console.log(Object.values(words))
// }, [words])

  return (
    <>
      {/* rimuovere */}
      {/* <Link to="/">HOME</Link> */}

      <fieldset style={fieldset}>
        <legend style={legend}>
          <h1 >Seleziona le parole per comporrere la frase:</h1>
        </legend>
        {/* creo una map per ogni valore prelevato con l'api e creou una checkbox */}
        {title.map((item, i) => (
          <div key={i}>
        
            <input type="checkbox" id={item} name={item} 
            // monitoro quando vine seleziona e deselezionata per aggiugnere o rimuovere il valore
            onChange={(e) => {
                // add to list
                if (e.target.checked) {
                  // metodo per aggiugnere valori alla lista come arry senza sovrascrivere i precedenti
                  setWords([
                    ...words,
                    
                      item,
                    
                  ]);
                } else {
                  // remove from list
                  // filtra  e restituisce i valori diversi da quello a cui si è fatto unchek
                  setWords(
                    words.filter(word => word !== item),
                  );
                }
              }}
            />
            <label htmlFor={item} style={list}>{item}</label>
            <br></br>
          </div>
        ))}

      </fieldset>
      {/* TODO */}
      {/* solo se è stata selezionato almeno 1 valore aggiugi il bottone per andate avanti */}

      <div style={footer}>
        <div>
          <Link to="/" style={footerItem}> 
          Indietro
          </Link> 
        </div>
        <div>
          {/* state permette di passare come props dei valori e poi richiamarli nella pagina con il location */}
          <Link to="/phrase" state={{ words: JSON.stringify(words) }} style={footerItem}> 
            Avanti
          </Link> 
        </div>
      </div>
    </>
  );
};

export async function getServerData() {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_limit=5`
  // );
  const res = await fetch(
    `https://random-word-api.herokuapp.com/word?lang=it&number=10`
  );
  const data = await res.json();

  return {
    props: {
      title: data,
    },
  };
}

export default WordPage;
