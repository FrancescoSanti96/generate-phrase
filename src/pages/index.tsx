import { Link } from "gatsby"
import { isAbsolute } from "path"
import * as React from "react"


// styles
const page = {
height: "100%",
width: "100%",
backgroundColor: "rgb(2, 211, 248)",
clipPath: "polygon(0 0, 80% 0%, 100% 0, 100% 100%, 83% 77%, 57% 68%, 21% 50%, 0 25%)",
// position: "absolute",
zIndex: "-1",
}

const btnPage = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}

const btn = {
  // color: "white",
  padding: "25px",
  fontSize: "75px",
  backgroundColor: "#32a891",
  margin: "auto",
  border: "solid 8px #298976",
  "& :hover" : {
    backgroundColor: "#1d6254"
  }

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
          {/* Link permette di fare il route verso un altra pagina in automatico */}
          <Link to="/word" style={btnLink}><b>WORDS</b></Link>
        </button>
      </div>
    </main>
  )
}

export default IndexPage
// TODO
// Sistemare la view che viene più grossa dello schermo per i padding credo di body ...