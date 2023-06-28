import {useState} from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import TodoModel from './components/TodoModel';
import TodoForm  from './components/TodoForm';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';

function App() {
  const [todos, setTodos] = useState<TodoModel[]> ([
    {id: 1, title: "JavaScript1", description: "hello its JavaScript1"},
    {id: 2, title: "JavaScript2", description: "hello its JavaScript2"},
    {id: 3, title: "JavaScript3", description: "hello its JavaScript3"},
  ])
  const [visible, setVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<TodoModel[]>([])
  const [post, setPost] = useState({title:'', description:''})
  const [titleWarning, setTitleWarning] = useState(false)

  const createNewPost = (NewPost: TodoModel) => {
    const post = {
      ...NewPost, id: todos.length + 1  // title и description находятся в NewPost и дописываем id  
    }
    setTodos([...todos, post])
    setSearchResults([...searchResults, post])
    setVisible(false)
  }

  const clearInput = () => {
    setPost({title: "", description: ""})
    setTitleWarning(false)
    setVisible(false)
  }
  const handleSearch = (searchTerm: string) => {
    const results = todos.filter(todo => 
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
  }

  const removePost = (todo: TodoModel) => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }
  
  return (
    <div className='App'>
      <Button 
        style={{marginTop: "10px", padding: "10px", fontSize: "18px"}} 
        onClick={() => setVisible(true)}
      >
        Create Task
      </Button>
      <Modal visible={visible} onClick={() => clearInput()}>
        <TodoForm 
          create={createNewPost} 
          post={post}
          setPost={setPost}
          titleWarning={titleWarning}
          setTitleWarning={setTitleWarning}
        />
      </Modal>
      <hr style={{margin: "10px 0"}}></hr>
      <Input
        style={{padding: "10px"}}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          handleSearch(e.target.value)
        }}
        placeholder="Search..."
      />
      <TodoList 
        remove={removePost} 
        todos={searchTerm 
          ? searchResults
          : todos
          } 
        title="Todo Tasks"
      />
    </div>
  );
}

export default App;
