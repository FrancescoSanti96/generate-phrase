import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";

// styles
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
}

// passo il valore restituito dalla chiamata api come props
const WordPage = ({ serverData }) => {
  // stato per prelevare i valori contenuti nella checkbox selezionate e deselezionate
  const [words, setWords] = useState([]);

  //serve per prelevare la props della chiamata api
  const { title } = serverData;

  return (
    <>
      <fieldset style={fieldset}>
        <legend style={legend}>
          <h1 >Seleziona le parole per comporrere la frase:</h1>
        </legend>
        {/* creo una map per ogni valore prelevato con l'api e li associo ad una checkbox con anche il label*/}
        {title.map((item, i) => (
          <div key={i}>
        
            <input type="checkbox" id={item} name={item} 
            // monitoro quando vine seleziona e deselezionata per aggiugnere o rimuovere il valore
            onChange={(e) => {
                // add to list
                if (e.target.checked) {
                  // metodo per aggiugnere valori alla lista come array senza sovrascrivere i precedenti
                  setWords([
                    ...words,
                    
                      item,
                    
                  ]);
                } else {
                  // remove from list
                  // filtra  e restituisce i valori diversi da quello che si è deselezionato
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
      <div style={footer}>
        <div>
          <Link to="/" style={footerItem}> 
          Indietro
          </Link> 
        </div>
        <div>
          {/* state permette di passare come props dei valori e poi richiamarli nella pagina reindirizzata con il location */}
          <Link to="/phrase" state={{ words: JSON.stringify(words) }} style={footerItem}> 
            Avanti
          </Link> 
        </div>
      </div>
    </>
  );
};

// Si utilizza per usare il Server Side Rendering
export async function getServerData() {
  // richiama 10 parole in italiano in modo casuale 
  const res = await fetch(
    `https://random-word-api.herokuapp.com/word?lang=it&number=10`
  );
  const data = await res.json();

  // Gatsby permette di richiamare come props il valore restiutito nel componente
  return {
    props: {
      title: data,
    },
  };
}

export default WordPage;
