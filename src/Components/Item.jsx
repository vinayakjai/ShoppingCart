function Item({ ItemName, quantity }) {
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>{ItemName}</p>
        <p>{quantity}</p>
      </div>
    </>
  );
}

export default Item;
