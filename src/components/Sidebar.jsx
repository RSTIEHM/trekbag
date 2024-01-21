/* eslint-disable react/prop-types */
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({
  handleAllComplete,
  resetInitialItems,
  handleAddItem,
  handleDeleteAllItems,
  handleAllIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleAllComplete={handleAllComplete}
        resetInitialItems={resetInitialItems}
        handleDeleteAllItems={handleDeleteAllItems}
        handleAllIncomplete={handleAllIncomplete}
        text="Add To List"
      />
    </div>
  );
}

export default Sidebar;
