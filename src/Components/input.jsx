import { useState } from "react";

function Input({ handleAddItem }) {
  let [input, setInput] = useState("");

  return (
    <>
      <input
        placeholder="enter item here"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          handleAddItem(input);
          setInput("");
        }}
      >
        add
      </button>
    </>
  );
}

export default Input;
