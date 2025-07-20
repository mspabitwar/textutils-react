import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        //console.log("You have clicked on handleUpperClick " + text);
        setText(text.toUpperCase());
    }

    const handleLowerClick = () => {
        //console.log("You have clicked on handlelowerClick " + text);
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    //text = "new text"; // wrong way to update the state
    //setText("new text"); //correct way to update the state

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}