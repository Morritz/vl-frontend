import create from "zustand";
import { combine } from "zustand/middleware";
import { useId } from "react";

interface IToast {
  id: number;
  message: string;
}

export const useToastStore = create(
  combine({ toastList: [] as IToast[] }, (set, get) => ({
    addToast: (message: string) => {
      const newToastList = [
        ...get().toastList,
        { message: message, id: Date.now() },
      ];
      return set(() => ({ toastList: newToastList.splice(-4) }));
    },
  }))
);
