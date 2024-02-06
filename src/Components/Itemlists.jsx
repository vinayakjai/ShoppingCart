import Item from "./Item";

function ItemList({ shoppingItems }) {
  return (
    <>
      {
      shoppingItems.map((item) => (
        <Item ItemName={item.name} key={item.id} quantity={item.quantity} />
      ))}
    </>
  );
}

export default ItemList;
