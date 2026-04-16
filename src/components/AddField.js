import React, { useState } from "react";

const AddField = ({obj,setObj}) => {

    
    let [one, setOne] = useState('')
    let [two, setTwo] = useState('')

    function handleChange(name,age){
        setObj([...obj, { name, age }])
    }

    
    return (
        <div>
            <input name="name" onChange={(e) => {
                setOne(e.target.value)
                handleChange(one,two)
            }} type="text"></input>
            <input name="age" onChange={(e) => {
                setTwo(e.target.value)
                handleChange(one,two)
            }} type="number"></input>
            <button onClick={(e) => e.target.parentElement.remove()}>Remove</button>
        </div>
    )
}

export default AddField
