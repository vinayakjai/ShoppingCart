import { useReducer } from "react";
import ItemList from "./Itemlists";
import Input from "./input";
import itemReducer from "../reducers/itemreducer";
import {
  ShoppingDispatchContext,
  ShoppingItemsContext,
} from "../providers/ShoppingContext";

function ShoppingList() {
  let [shoppingItems, dispatch] = useReducer(itemReducer, []);

  return (
    <>
      <ShoppingItemsContext.Provider value={shoppingItems}>
        <ShoppingDispatchContext.Provider value={dispatch}>
          <Input />
          <ItemList />
        </ShoppingDispatchContext.Provider>
      </ShoppingItemsContext.Provider>
    </>
  );
}

export default ShoppingList;
