import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function TodoForm() {
  const addTask = useTodoStore((state) => state.addTask);
  const [disc, setDisc] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      disc,
      isDone: false,
    };
    console.log(newTask);
    addTask(newTask);
    setDisc("")
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        className="bg-gray-200 p-3  pl-4 rounded-3xl "
        placeholder="add task"
        value={disc}
        onChange={(e)=>setDisc(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
