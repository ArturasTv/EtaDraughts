import { create } from 'zustand';

type Sheet = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

enum SheetNames {
  mobileNavigation = 'mobileNavigation',
}

type SheetStore = Record<SheetNames, Sheet>;

const useSheetStore = create<SheetStore>()((set) => ({
  mobileNavigation: {
    isOpen: false,
    open: () =>
      set((state) => ({
        mobileNavigation: { ...state.mobileNavigation, isOpen: true },
      })),
    close: () =>
      set((state) => ({
        mobileNavigation: { ...state.mobileNavigation, isOpen: false },
      })),
  },
}));

export default useSheetStore;
