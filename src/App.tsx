import React, {useState} from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import TodoModel from './components/TodoModel';
import TodoForm  from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState<TodoModel[]> ([
    {id: 1, title: "JavaScript1", description: "hello its JavaScript1"},
    {id: 2, title: "JavaScript2", description: "hello its JavaScript2"},
    {id: 3, title: "JavaScript3", description: "hello its JavaScript3"},
  ])
  // получаем последний объект в массиве и достаем id из него
  const lastId = todos[todos.length - 1].id

  const createNewPost = (NewPost: TodoModel) => {
    setTodos([...todos, NewPost])
  }
  const removePost = (todo: TodoModel) => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

  return (
    <div className='App'>
      <TodoForm create={createNewPost} lastId={lastId}/>
      <hr style={{margin: "15px 0"}}></hr>
      <TodoList remove={removePost} todos={todos} title="Todo Tasks"/>
    </div>
  );
}

export default App;
