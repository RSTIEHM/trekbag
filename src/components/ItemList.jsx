/* eslint-disable react/prop-types */

import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState, useMemo } from "react";

// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort By Default", value: "default" },
  { label: "Sort By Packed", value: "packed" },
  { label: "Sort By Unpacked", value: "unpacked" },
];

function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");
  // const { items, handleDeleteItem, handlePacked } = useItemsContext();

  // const deleteAllItems = useItemsStore((state) => state.deleteAllItems);
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            default={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item, i) => {
        return (
          <Item
            toggleItem={toggleItem}
            onClick={deleteItem}
            key={i}
            item={item}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item, onClick, toggleItem }) {
  return (
    <li className="item">
      <label htmlFor={`${item.name}`}>
        <input
          onClick={() => toggleItem(item.id)}
          checked={item.packed}
          name={`${item.name}`}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onClick(item.id)}>X</button>
    </li>
  );
}
