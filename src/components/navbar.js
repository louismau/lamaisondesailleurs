import React from "react"

const Navbar = () => (
  <header
    style={{
      color: `white`,
      background: `#48BF84`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0.75rem 1.0875rem`,
      }}
    >
      <div 
      style= {{
        display:`flex`,
      }}
      >
        <p
        style={{
          marginRight: `20px`
        }}>
            lamaisondesailleurs@gmail.com
        </p>
        <p>
            +46 268 459
        </p>
      </div>
      <div 
      style= {{
        display:`flex`
      }
      }>
        <p
        style={{
          marginRight: `20px`
        }}>
        Essaouira
        </p>
        <p>16°C</p>
      </div>
    </div>
  </header>
)

export default Navbar