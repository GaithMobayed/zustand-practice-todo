import { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import ConfirmationMessage from "./ConfirmationMessage";

function TodoItem({ t }) {
  const removeTask = useTodoStore((state) => state.removeTask);
  const toggleDone = useTodoStore((state) => state.toggleDone);
  const editTask = useTodoStore((state) => state.editTask);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDisc, setEditedDisc] = useState(t.disc);

  const { id, disc, isDone } = t;

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedDisc = editedDisc.trim();
    if (!trimmedDisc) return;

    editTask(id, {id:id, disc: trimmedDisc ,isDone:false });
    setIsEditing(false);
  }

  return (
    <div
      className={`p-1 rounded-4xl bg-gray-50 flex justify-center items-center w-fit m-2 ${isDone && !isEditing ? "line-through" : ""}`}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            aria-label="Edit task"
            autoFocus
            className="bg-white p-2 rounded-3xl"
            value={editedDisc}
            onChange={(e) => setEditedDisc(e.target.value)}
          />
          <button
            type="submit"
            disabled={!editedDisc.trim()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-red-950 m-1 disabled:opacity-50"
            aria-label="Save task"
          >
            ✔
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-900 m-1"
            aria-label="Cancel editing"
          >
            ✕
          </button>
        </form>
      ) : (
        <>
          {disc}
          <button
            onClick={() => toggleDone(id)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-red-950 m-1"
            aria-label={isDone ? "Mark task incomplete" : "Mark task complete"}
          >
            {isDone ? "❌" : "✔"}
          </button>
          <button
            onClick={() => {
              setEditedDisc(disc);
              setIsEditing(true);
            }}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 text-red-950 m-1"
            aria-label="Edit task"
          >
            ✒
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 text-red-950 m-1"
            aria-label="Delete task"
          >
            🔪
          </button>
        </>
      )}
      {showConfirm && (
        <ConfirmationMessage
          onClose={() => setShowConfirm(false)}
          onConfirm={() => removeTask(id)}
        />
      )}
    </div>
  );
}

export default TodoItem;
