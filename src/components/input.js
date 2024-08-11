import React, {useState} from "react";

const Input = ({onChangeHandler}) => {
    const [input, setInput] = useState("");

    const handleSubmit2 = (e) => {
        e.preventDefault();
        onChangeHandler(input)
        setInput("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit2}>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}}
                    placeholder="type city"     
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
)}
export default Input;