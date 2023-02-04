import React from 'react'
import { useState } from 'react';

export default function Content() {
    const [name, setName]=useState('a');
    let names=['a','b','c'];
  return (
    <main>
        <p> Content : {name}</p>
        <button onClick={()=>{setName(names[Math.floor(Math.random()*names.length)])}}> change name</button>
    </main>
  )
}
