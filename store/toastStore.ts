import create from "zustand";
import { combine } from "zustand/middleware";

export const useToastStore = create(
  combine({ toastList: [] as string[] }, (set, get) => ({
    addToast: (message: string) => {
      const newToastList = [...get().toastList, message];
      newToastList.splice(-4);
      return set(() => ({ toastList: newToastList }));
    },
  }))
);
