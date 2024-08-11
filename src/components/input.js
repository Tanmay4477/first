import React,{useState} from "react";

function Input({onCityChange}) {

    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onCityChange(input);
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="type city"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Get Weather</button>
                </form>
        </div>
    )
}


export default Input