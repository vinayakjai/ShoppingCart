import { useContext, useState } from "react";
import { ShoppingDispatchContext } from "../providers/ShoppingContext";

function Input() {
  let [input, setInput] = useState("");

  let dispatch = useContext(ShoppingDispatchContext);

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
          dispatch({
            type: "addItem",
            payload: input,
          });
          setInput("");
        }}
      >
        add
      </button>
    </>
  );
}

export default Input;
