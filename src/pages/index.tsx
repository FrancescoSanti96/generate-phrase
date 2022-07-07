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
  height: "95vh",
  alignItems: "center",
  justifyContent: "center",
}

const btn = {
  // color: "white",
  padding: "25px",
  fontSize: "xxx-large",
  border: "none",
  backgroundColor: "#32a891",
  margin: "auto"
}

const btnLink = {
  color: "white",
  textDecoration: "none",
}

const IndexPage = () => {
  return (
    <main style={page}>
      <div style={btnPage}>
        <button style={btn}> 
          {/* Link permette di fare il route verso un altra pagina in automatico */}
          <Link to="/word" style={btnLink}>WORD</Link>
        </button>
      </div>
     
    </main>
  )
}

export default IndexPage
// TODO
// Sistemare la view che viene più grossa dello schermo per i padding credo di body ...