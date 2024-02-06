import { useContext } from "react";
import {
  ShoppingDispatchContext,
  ShoppingItemsContext,
} from "../providers/ShoppingContext";
import Item from "./Item";

function ItemList() {
  let shoppingItems = useContext(ShoppingItemsContext);
  let dispatch = useContext(ShoppingDispatchContext);

  return (
    <>
      {shoppingItems.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "2rem" }}>
          <button
            onClick={() =>
              dispatch({ type: "incrementQuantity", payload: item.id })
            }
          >
            +
          </button>
          <Item ItemName={item.name} quantity={item.quantity} />
          <button
            onClick={() =>
              dispatch({ type: "decrementQuantity", payload: item.id })
            }
          >
            -
          </button>
        </div>
      ))}
    </>
  );
}

export default ItemList;
