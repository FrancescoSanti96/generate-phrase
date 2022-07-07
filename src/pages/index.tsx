import { Link } from "gatsby"
import { isAbsolute } from "path"
import * as React from "react"


// styles 
const btnPage = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}

const btn = {
  padding: "25px",
  fontSize: "75px",
  backgroundColor: "#32a891",
  margin: "auto",
  border: "solid 8px #298976",
}

const btnLink = {
  color: "wheat",
  textDecoration: "none",
}

const IndexPage = () => {
  return (
    <main>
      <div style={btnPage}>
        <button style={btn} className="btnWords"> 
          {/* Link permette di fare il route verso un altra pagina in automatico by gatsby */}
          <Link to="/word" style={btnLink}><b>WORDS</b></Link>
        </button>
      </div>
    </main>
  )
}

export default IndexPage
