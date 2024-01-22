/* eslint-disable react/prop-types */
function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      {" "}
      {numberOfItemsPacked}
      <b>{totalNumberOfItems}</b> / Items Pack
    </p>
  );
}

export default Counter;
