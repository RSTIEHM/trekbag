/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const deleteAllItems = useItemsStore((state) => state.deleteAllItems);
  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttontype="secondary">
        Mark All As Complete
      </Button>
      <Button onClick={markAllAsInComplete} buttontype="secondary">
        Mark All As Incomplete
      </Button>
      <Button onClick={resetToInitial} buttontype="secondary">
        Reset
      </Button>
      <Button onClick={deleteAllItems} buttontype="secondary">
        Delete
      </Button>
    </section>
  );
}

export default ButtonGroup;
