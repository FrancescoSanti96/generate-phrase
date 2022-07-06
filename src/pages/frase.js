import * as React from "react"

export default function Component ({location}) {
  return (
    <h1>Hi from the second page, {location.state.username}</h1>
  )

}