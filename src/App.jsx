import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "sleep",
    packed: false,
  },
  {
    id: 3,
    name: "run",
    packed: true,
  },
];

function App() {
  const [travelItems, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    const newItems = [...travelItems, newItem];
    console.log(travelItems);
    setItems(newItems);
  }

  function handleDeleteAllItems() {
    console.log(travelItems);
    setItems([]);
  }

  function resetInitialItems() {
    console.log(travelItems);
    setItems(initialItems);
  }

  function handleAllComplete(travelItems) {
    console.log(travelItems, "!!!!");
    const newItems = travelItems.map((item) => {
      return {
        ...item,
        packed: true,
      };
    });
    setItems(newItems);
  }

  function handleAllIncomplete(travelItems) {
    console.log(travelItems, "!!!!");
    const newItems = travelItems.map((item) => {
      return {
        ...item,
        packed: false,
      };
    });
    setItems(newItems);
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={travelItems} />
        <Sidebar
          resetInitialItems={resetInitialItems}
          handleDeleteAllItems={handleDeleteAllItems}
          handleAddItem={handleAddItem}
          handleAllComplete={handleAllComplete}
          handleAllIncomplete={handleAllIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
