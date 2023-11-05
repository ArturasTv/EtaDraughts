import { create } from 'zustand';

enum ModalNames {
  deleteAccount = 'deleteAccount',
  createGame = 'createGame',
}

type Modal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  handleOpenChange: (isOpen: boolean) => void;
};

type ModalStore = Record<ModalNames, Modal>;

const useModalStore = create<ModalStore>()((set) => ({
  deleteAccount: {
    isOpen: false,
    open: () =>
      set((state) => ({
        deleteAccount: { ...state.deleteAccount, isOpen: true },
      })),
    close: () =>
      set((state) => ({
        deleteAccount: { ...state.deleteAccount, isOpen: false },
      })),
    handleOpenChange: (isOpen: boolean) => {
      set((state) => ({
        deleteAccount: { ...state.deleteAccount, isOpen },
      }));
    },
  },
  createGame: {
    isOpen: false,
    open: () =>
      set((state) => ({
        createGame: { ...state.createGame, isOpen: true },
      })),
    close: () =>
      set((state) => ({
        createGame: { ...state.createGame, isOpen: false },
      })),
    handleOpenChange: (isOpen: boolean) => {
      set((state) => ({
        createGame: { ...state.createGame, isOpen },
      }));
    },
  },
}));

export default useModalStore;
