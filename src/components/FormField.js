import React, { useState } from "react";
import AddField from "./AddField";

const FormField = () => {

    let [arr,setArr] = useState([])
    let [obj, setObj] = useState([{ name: "", age: "" }]);

    function handleAddClick(){
        setArr([...arr,<AddField index={arr.length+1} obj={obj} setObj={setObj}/>])
        setObj([...obj, { name: "", age: "" }]);
    }

    function handleSubmit(){
        console.log(obj)
    }

  return (
    <div>
        <form>
            <AddField index={0} obj={obj} setObj={setObj}/>
            {arr.map(value=>(
                value
            ))}
        </form>
        <button onClick={handleAddClick}>Add More..</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormField
