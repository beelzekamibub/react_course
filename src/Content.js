import React from 'react';
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Content() {

    const [items, setItems]=useState([
                                        {
                                            id:1,
                                            checked:false,
                                            item: "cheese"
                                        },
                                        {
                                            id:2,
                                            checked:false,
                                            item: "item 2"
                                        },
                                        {
                                            id:3,
                                            checked:false,
                                            item: "item 3"
                                        }
                                    ]);
    
    const handleCheck=(id)=>{
        const listitems=items.map((item) => item.id===id ? {...item,checked:!item.checked} :item );
        setItems(listitems);
        localStorage.setItem('shoppingList',JSON.stringify(listitems));

    }
    const handleDelete=(id)=>{
        const listitems=items.filter((item)=>item.id!=id);
        setItems(listitems);
        localStorage.setItem('shoppingList',JSON.stringify(listitems));
    }
    return (
        <main>
        {items.length?(
                <ul>
                    {items.map((item)=>(
                        <li className='item' key={item.id}>
                            <input type='checkbox' onChange={()=>{handleCheck(item.id)}} checked={item.checked}></input>
                            <label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>{handleCheck(item.id)}}>{item.item}</label>
                        <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0"></FaTrashAlt>
                        </li>
                        
                    ))}
                </ul>
            ):(<h1>list is empty</h1>)}
        </main>
    )
}
