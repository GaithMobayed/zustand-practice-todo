export default function ConfirmationMessage({
  onClose,
  onConfirm,
  message = "Are you sure you want to kill this task?",
}) {
  function handleConfirm() {
    onConfirm();
    onClose();
  } 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 flex flex-col gap-4">
        <button onClick={onClose} className="ml-auto text-gray-500">
          X
        </button>
        <p className="text-center text-gray-800">{message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-3xl bg-gray-200 text-gray-800"
          >
            show mercy 😒
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded-3xl bg-red-500 text-white"
          >
            kill 🔪
          </button>
        </div>
      </div>
    </div>
  );
}

export { ConfirmationMessage };
