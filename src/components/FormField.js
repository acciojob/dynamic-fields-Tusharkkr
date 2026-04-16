import React, { useState } from "react";
import AddField from "./AddField";

const FormField = () => {

    let [arr,setArr] = useState([])
    let [obj, setObj] = useState([])

    function handleAddClick(){
        setArr([...arr,<AddField obj={obj} setObj={setObj}/>])
    }

    function handleSubmit(){
        console.log(obj)
    }

  return (
    <div>
        <form>
            <AddField obj={obj} setObj={setObj}/>
            {arr.map(value=>(
                value
            ))}
        </form>
        <button onClick={handleAddClick}>Add More..</button>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormField
