import Item from "./Item";

function ItemList({ shoppingItems, addQuantity, decrementQuantity }) {
  return (
    <>
      {shoppingItems.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "2rem" }}>
          <button onClick={() => addQuantity(item.id)}>+</button>
          <Item ItemName={item.name} quantity={item.quantity} />
          <button onClick={() => decrementQuantity(item.id)}>-</button>
        </div>
      ))}
    </>
  );
}

export default ItemList;
