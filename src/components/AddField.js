import React, { useState } from "react";

const AddField = ({ obj, setObj, index }) => {

    let [one, setOne] = useState('');
    let [two, setTwo] = useState('');

    function handleChange(name, age) {
        let updated = [...obj];
        updated[index] = { name, age }; 
        setObj(updated);
    }

    return (
        <div>
            <input
                name="name"
                type="text"
                onChange={(e) => {
                    const val = e.target.value;
                    setOne(val);
                    handleChange(val, two);
                }}
            />

            <input
                name="age"
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setTwo(val);
                    handleChange(one, val);
                }}
            />

            <button onClick={(e) => e.target.parentElement.remove()}>
                Remove
            </button>
        </div>
    );
};

export default AddField;