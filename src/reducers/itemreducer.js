import { v4 as uuidv4 } from "uuid";
function itemReducer(shoppingItems, action) {
  if (action.type == "addItem") {
    return [
      ...shoppingItems,
      {
        id: uuidv4(),
        name: action.payload,
        quantity: 0,
      },
    ];
  } else if (action.type == "incrementQuantity") {
    const updatedShoppingItem = shoppingItems.map((item) => {
      if (item.id == action.payload) {
        item.quantity++;
      }
      return item;
    });

    return updatedShoppingItem;
  } else if (action.type == "decrementQuantity") {
    const updatedShoppingItem = shoppingItems.map((item) => {
      if (item.id == action.payload) {
        item.quantity--;
      }
      return item;
    });

    return updatedShoppingItem;
  }
}

export default itemReducer;
