import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success ");
    // setText("You have clicked on handleUpClick");
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success ");
    // setText("You have clicked on handleLowClick");
  };
  const handleTagClick = () => {
    console.log("new Text " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success ");
    // setText("You have clicked on handleLowClick");
  };
  const handleCapClick = () => {
    let words = text.split(" ");
    let capitalizeWords = words.map((word) => {
      if (word.length === 0) return " ";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(capitalizeWords.join(" "));
    props.showAlert("Remove Capitalize text", "success ");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    //console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success ");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success ");
  };

  const [text, setText] = useState(" ");
  //   text = "new text"; //Wrong way  to change the state
  //   setText("new text"); //Correct way  to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "light",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTagClick}>
          Blank Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>
          Capitalize Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Extra Spaces
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter something in the preview"}</p>
        </p>
      </div>
    </>
  );
}
