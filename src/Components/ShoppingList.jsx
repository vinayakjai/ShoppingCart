import { useReducer } from "react";
import ItemList from "./Itemlists";
import Input from "./input";
import itemReducer from "../reducers/itemreducer";

function ShoppingList() {
  function handleAddItem(itemname) {
    dispatch({
      type: "addItem",
      payload: itemname,
    });
  }

  function handleAddQunatity(itemId) {
    dispatch({
      type: "incrementQuantity",
      payload: itemId,
    });
  }
  function handleDecrementQunatity(itemId) {
    dispatch({
      type: "decrementQuantity",
      payload: itemId,
    });
  }
  let [shoppingItems, dispatch] = useReducer(itemReducer, []);
  return (
    <>
      <Input handleAddItem={handleAddItem} />
      <ItemList
        shoppingItems={shoppingItems}
        addQuantity={handleAddQunatity}
        decrementQuantity={handleDecrementQunatity}
      />
    </>
  );
}

export default ShoppingList;
