import * as React from "react"
import { Link } from "gatsby"

export default function Component ({location}) {
  // const phrase = JSON.parse(location.state.words)
  // usa le espressioni regolar per permettere di rimuovere tutti gli elementi il g sta per global ed è quello che li dice di rimuoverli tutti
  // const phrase = location.state.words.replace(/,/g,' ').replace(/"/g,'').replace('[','').replace(']','')

  // pulisco la frase ricevuta in formato json
  const phrase = location.state.words.replaceAll(',',' ').replaceAll('"','').replaceAll('[','').replaceAll(']','')
  console.log(typeof(phrase))

  return (
    <div>
     
      <h1>La frase:</h1>
      <h3>{phrase}</h3>

      <Link to="/">HOME</Link>
    </div>
    
  )

}