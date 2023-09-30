import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onToggle }) {
  const [sortBy, setSortBy] = useState("packed");
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggle={onToggle}
            />
          );
        })}
      </ul>
      <select
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort Items By Input</option>
        <option value="Description">Sort Items By Description</option>
        <option value="packed">Sort Items By Packed Status</option>
      </select>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
