import useTodoStore from "../store/useTodoStore"
import TodoItem from "./TodoItem"

function TodoList() {
    const todos = useTodoStore((state)=>state.todos);

    return (
        <div className="flex-wrap  flex  w-full">
            {
                todos.map((t)=><TodoItem key={t.id} t={t} />)
            }
        </div>
    )
}

export default TodoList
