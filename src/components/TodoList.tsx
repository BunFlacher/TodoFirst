import TodoItem from "./TodoItem"
import TodoModel from "./TodoModel"

const TodoList: React.FC<{todos: TodoModel[], title: string, remove: (todo: TodoModel) => void}> = ({todos, title, remove}) => {
    if(!todos.length) {
        return(
            <h1 style={{textAlign: "center", color: "rgb(255,255,255)"}}>
                No one Task
            </h1>
        )
    }
    return(
        <div>
            <h1 style={{textAlign: "center", color: "rgb(255,255,255)"}}>
                {title}
            </h1>
            <div>
                {todos.map((todo: TodoModel) =>
                    <TodoItem remove={remove} todo={todo} key={todo.id}/>
                )}
            </div>
        </div>
    )
}

export default TodoList