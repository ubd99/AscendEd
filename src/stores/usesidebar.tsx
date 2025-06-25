import { create } from "zustand";
type SidebarStore = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleSidebar: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));

export { useSidebarStore };
