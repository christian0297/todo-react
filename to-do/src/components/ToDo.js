
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

import React, { useState } from "react";



const ToDo = () => {

    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch();


    const [value, setValue] = useState("");

    return (

        <>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />

            <button onClick={() => {
                
                    dispatch(addTodo(value))
            }}>
                Add ToDo
            </button>

            {/* oppure, se avessi voluto farlo interno al componente:
                const ToDo = () =>{
                const [items, setItem] = useState([]);
    
                return ( 
                    <button onClick={()=> {
                        if(value!=="")
                            setItem(items.concat(value));
                
                    }}>  Add ToDo  </button>
                    <ul>   {items.map(...} </ul>
            );} */}


            <ul>
                {todoList.todoItems.map((item, index) => {
                    return (
                        <li key={"item" + index}>
                            {item}
                        </li>
                    )
                })}
            </ul>


        </>

    )

}


export default ToDo;