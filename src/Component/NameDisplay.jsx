import React, { useState } from "react";

const NameDisplay = () => {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");

  const [fName, setFName] = useState("");
  const [LName, setLName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    try {
      if (fName && LName) {
        setName(fName + " " + LName);
        setDisplay(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "350px",
          gap: "10px",
        }}
      >
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          value={fName}
          onChange={(e) => {
            setFName(e.target.value);
          }}
          required
        />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          value={LName}
          onChange={(e) => {
            setLName(e.target.value);
          }}
          required
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      {display && <p>Full Name: {name}</p>}
    </div>
  );
};

export default NameDisplay;
