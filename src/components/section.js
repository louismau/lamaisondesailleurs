import React from "react"

const Section = ({title, image, text}) => (
  <React.Fragment>
    <h1>
      {title}
    </h1>
    <p>
      {text}
    </p>
    <img href={image}/>
  </React.Fragment>  
)

export default Section