import React, { useState } from "react";
import AddField from "./AddField";

const FormField = () => {

    let [arr, setArr] = useState([]);
    let [obj, setObj] = useState([{ name: "", age: "" }]);

    function handleAddClick() {
        setArr([...arr, <AddField index={arr.length + 1} obj={obj} setObj={setObj} />]);
        setObj([...obj, { name: "", age: "" }]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(obj);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <AddField index={0} obj={obj} setObj={setObj} />

                {arr.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </form>

            <button onClick={handleAddClick}>Add More..</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default FormField;