interface ToastProps {
  message: string;
}
const Toast = ({ message }: ToastProps) => {
  return (
    <div
      id="toast-simple"
      className="flex items-center max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
    >
      <div className="text-sm font-normal">{message}</div>
    </div>
  );
};
export const Toasts = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-y-2">
      <Toast message="No pokemons loaded." />
    </div>
  );
};
