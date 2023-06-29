import TodoItem from "./TodoItem"
import TodoModel from "./TodoModel"
import TodoListTitle from "./TodoListTitle"

const TodoList: React.FC<{todos: TodoModel[], remove: (todo: TodoModel) => void}> = ({todos, remove}) => {
    return(
        <div>
            <TodoListTitle todos={todos}/>
            <div>
                {todos.map((todo: TodoModel) =>
                    <TodoItem remove={remove} todo={todo} key={todo.id}/>
                )}
            </div>
        </div>
    )
}

export default TodoList