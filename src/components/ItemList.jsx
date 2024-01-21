/* eslint-disable react/prop-types */
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, i) => {
        return <Item key={i} item={item} />;
      })}
    </ul>
  );
}

export default ItemList;

function Item({ item }) {
  return (
    <li className="item">
      <label htmlFor={`${item.name}`}>
        <input checked={item.packed} name={`${item.name}`} type="checkbox" />
        {item.name}
      </label>
      <button>X</button>
    </li>
  );
}
