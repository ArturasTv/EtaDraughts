import { create } from 'zustand';

enum ModalNames {
  deleteUser = 'deleteUser',
}

type Modal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  handleOpenChange: (isOpen: boolean) => void;
};

type ModalStore = Record<ModalNames, Modal>;

const useModalStore = create<ModalStore>()((set) => ({
  deleteUser: {
    isOpen: false,
    open: () =>
      set((state) => ({
        deleteUser: { ...state.deleteUser, isOpen: true },
      })),
    close: () =>
      set((state) => ({
        deleteUser: { ...state.deleteUser, isOpen: false },
      })),
    handleOpenChange: (isOpen: boolean) => {
      set((state) => ({
        deleteUser: { ...state.deleteUser, isOpen },
      }));
    },
  },
}));

export default useModalStore;
