import { create } from 'zustand';

enum SheetNames {
  mobileNavigation = 'mobileNavigation',
  userProfileNavigation = 'userProfileNavigation',
}

type Sheet = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

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
  userProfileNavigation: {
    isOpen: false,
    open: () =>
      set((state) => ({
        userProfileNavigation: { ...state.userProfileNavigation, isOpen: true },
      })),
    close: () =>
      set((state) => ({
        userProfileNavigation: {
          ...state.userProfileNavigation,
          isOpen: false,
        },
      })),
  },
}));

export default useSheetStore;
