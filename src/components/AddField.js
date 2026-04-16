import React, { useState } from "react";

const AddField = ({index,obj,setObj}) => {

    
    let [one, setOne] = useState('')
    let [two, setTwo] = useState()

    function handleChange(name,age){
        let obz = [...obj]
        obz[index] = {name, age} // name : name , age
        setObj(obz)
    }

    
    return (
        <div>
            <input name="name" onChange={(e) => {
                let val = e.target.value
                setOne(val)
                handleChange(one,two)
            }} type="text"></input>
            <input name="age" onChange={(e) => {
                let val = e.target.value
                setTwo(val)
                handleChange(one,val)
            }} type="number"></input>
            <button onClick={(e) => e.target.parentElement.remove()}>Remove</button>
        </div>
    )
}

export default AddField
