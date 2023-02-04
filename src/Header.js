import React from 'react'

export default function Header() {
    const headerStyle={
        backgroundColor:'mediumorchid', color:'white'
    };
    const handleClick=(e)=>{
      console.log(e);
    }
  return (
    // <header style={headerStyle}>
    <header>
        <h1 onDoubleClick={handleClick}>groceries</h1>
        <button onClick={(e)=>{handleClick(e)}}> click it </button>
    </header>
  )
}
