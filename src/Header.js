import React from 'react'

export default function Header({title}) {
    const headerStyle={
        backgroundColor:'mediumorchid', color:'white'
    };
    const handleClick=(e)=>{
      console.log(e);
    }
  return (
    <header>
        <h1 onDoubleClick={handleClick}>{title}</h1>
        <button onClick={(e)=>{handleClick(e)}}> click it </button>
    </header>
  )
}

Header.defaultProps={
  title: "defeault title"
}