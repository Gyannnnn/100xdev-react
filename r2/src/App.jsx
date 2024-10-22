import React from 'react'

export default function App() {
  const textColor = {
    color:"black"
  }
  return (
    <div>
      <div style={{borderRadius:"50%",backgroundColor:"gray",height:"50vh",width:"100vw"}}>
        <h1 style={textColor}>Inside The Iner div</h1>
      </div>
      <hr/>
    </div>
  )
}
