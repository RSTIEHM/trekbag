import { create } from "zustand";
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
export const useItemsStore = create((set) => ({
  items: initialItems,

  resetToInitial: () => {
    console.log("RESET");
    set(() => ({ items: initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return {
          ...item,
          packed: true,
        };
      });
      return { items: newItems };
    });
  },
  markAllAsInComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return {
          ...item,
          packed: false,
        };
      });
      return { items: newItems };
    });
  },
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    console.log(newItem);
    set((state) => ({ items: [...state.items, newItem] }));
  },

  deleteAllItems: () => {
    set(() => ({ items: [] }));
  },

  deleteItem: (id) => {
    set((state) => {
      let newListItems = state.items.filter((item) => {
        return item.id !== id;
      });
      return { item: newListItems };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
}));
