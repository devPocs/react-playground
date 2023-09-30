import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

//const initialItems = [
//  { id: 1, description: "Passports", quantity: 2, packed: false },
//  { id: 2, description: "Socks", quantity: 12, packed: false },
//  { id: 3, description: "Journal", quantity: 1, packed: false },
//  { id: 4, description: "Phones", quantity: 2, packed: false },
//  { id: 5, description: "Laptop", quantity: 1, packed: true },
//  { id: 6, description: "Air-pods", quantity: 1, packed: false },
//  { id: 7, description: "Pen", quantity: 1, packed: false },
//];
function App() {
  const [items, setItems] = useState([]);
  function handleSetItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    //1. aim to update the state.
    //2. select a particular item based on its id...using the map method
    //3 conditinally change the packed state.
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form onHandleSetItems={handleSetItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggle}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
