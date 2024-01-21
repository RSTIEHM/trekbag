/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Button from "./Button";

function ButtonGroup({
  handleAllComplete,
  resetInitialItems,
  handleDeleteAllItems,
  handleAllIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleAllComplete} buttontype="secondary">
        Mark All As Complete
      </Button>
      <Button onClick={handleAllIncomplete} buttontype="secondary">
        Mark All As Incomplete
      </Button>
      <Button onClick={resetInitialItems} buttontype="secondary">
        Reset
      </Button>
      <Button onClick={handleDeleteAllItems} buttontype="secondary">
        Delete
      </Button>
    </section>
  );
}

export default ButtonGroup;
