import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useToastStore } from "../store/toastStore";

interface ToastProps {
  message: string;
}
const Toast = ({ message }: ToastProps) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  return (
    //@ts-ignore
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="toast-simple"
          className="flex items-center max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div className="text-sm font-normal">{message}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export const Toasts = () => {
  const toasts = useToastStore();
  return toasts.toastList.length > 0 ? (
    <div className="fixed right-4 bottom-4 flex flex-col gap-y-2">
      {toasts.toastList.map((message, index) => {
        return <Toast key={index} message={message} />;
      })}
    </div>
  ) : null;
};
