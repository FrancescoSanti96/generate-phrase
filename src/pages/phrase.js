import * as React from "react"
import { Link } from "gatsby"

const footer = {
  display: "flex",
  justifyContent: "space-between"
}

const footerItem = {
  color: " #330099",
  fontSize: "xx-large",
}

const styleTitle = {
  color: "wheat",
  fontSize: "35px",
  marginTop: "20px",
  textAlign: "center"
}

const stylePhrase = {
  fontSize: "xx-large",
  color: "wheat",
  margin: "auto",
  textAlign: "center",
  padding: "20px",
  border: "solid 2px"
}

export default function Component ({location}) {
  // const phrase = JSON.parse(location.state.words)
  // usa le espressioni regolar per permettere di rimuovere tutti gli elementi il g sta per global ed è quello che li dice di rimuoverli tutti
  // const phrase = location.state.words.replace(/,/g,' ').replace(/"/g,'').replace('[','').replace(']','')
  
  let phrase = ""
  try {
    // pulisco la frase ricevuta in formato json come props attraverso il Link
    phrase = location.state.words.replaceAll(',',' ').replaceAll('"','').replaceAll('[','').replaceAll(']','')
  } catch (error) {
    console.log(error) 
  }

  return (
    <div>
      <h1 style={styleTitle}>La frase:</h1>
      <h3 style={stylePhrase}>{phrase}</h3>
      <br/>
      <div style={footer}>
        <div>
          <Link to="/word" style={footerItem}> 
          Indietro
          </Link> 
        </div>
        <div>
          <Link to="/" style={footerItem}> 
            Avanti
          </Link> 
        </div>
      </div>
    </div> 
  )
}