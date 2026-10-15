import useTodoStore from "../store/useTodoStore";

function TodoItem({ t }) {

  const removeTask = useTodoStore((state)=>state.removeTask);
  const toggleDone = useTodoStore((state)=>state.toggleDone);

  const { id ,disc, isDone } = t;
  return (
    <div
      className={`p-1 rounded-4xl bg-gray-50 flex justify-center items-center w-fit m-2 ${isDone ? "line-through" : null}`}
    >
      {disc}
      <button onClick={()=>toggleDone(id)} className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-red-950 m-1">
        {t.isDone ? "❌" : "✔"}
      </button>
      <button onClick={()=>removeTask(id)} className="w-8 h-8 flex items-center justify-center rounded-full bg-red-400 text-red-950 m-1">
        🔪
      </button>
    </div>
  );
}

export default TodoItem;
