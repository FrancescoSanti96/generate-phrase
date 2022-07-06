import * as React from "react"
import { Link } from "gatsby"

export default function Component ({location}) {
  return (
    <div>
      <h1>Hi from the second page, {location.state}</h1>
      <Link to="/">HOME</Link>
    </div>
    
  )

}