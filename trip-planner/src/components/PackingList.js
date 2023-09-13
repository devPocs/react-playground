const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Journal", quantity: 1, packed: false },
  { id: 4, description: "Phones", quantity: 2, packed: false },
  { id: 5, description: "Laptop", quantity: 1, packed: true },
  { id: 6, description: "Air-pods", quantity: 1, packed: false },
  { id: 7, description: "Pen", quantity: 1, packed: false },
];
export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}
