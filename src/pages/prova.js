import { Link } from "gatsby"
import * as React from "react"

const Prova = ({serverData}) => {
  const { title } = serverData
  console.log(title[0].title)
    return ( 
        <div>
            {/* rimuovere */}
            <Link to="/">HOME</Link>
            
            


            <fieldset>
                <legend><h1>Seleziona i piatti:</h1></legend>
                    {title.map((item,i) => 
                    <div key={i}>
                        <input type="checkbox" id={item.title} name={item.title}/>
                        <label for={item.title}>{item.title}</label>
                    </div>)}
            </fieldset>
            {/* TODO */}
            {/* solo se è stata selezionato almeno 1 valore aggiugi il bottone per andate avanti */}
            <Link to="/frase" state={{ username: 'Fra' }}>HOME</Link>
        </div>
     )
}



export async function getServerData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    const data = await res.json()

    return {
        props: {
            title: data,
        }
    }
}

export default Prova