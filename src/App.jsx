import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return <div className='w-screen h-screen bg-purple-900 flex flex-col justify-start items-center p-10'>
    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>
}

export default App
