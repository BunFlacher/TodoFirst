import TodoModel from "./TodoModel"
import {FC} from "react"
import Button from "./UI/button/Button"

const TodoItem: FC<{ todo: TodoModel, remove: (todo: TodoModel) => void}> = ({todo, remove}) => {
    return(
        <div className="todo">
            <div>
                <strong>{todo.id} {todo.title}</strong>
                <div>
                    {todo.description}
                </div>
            </div>
            <div>
                <Button onClick={() => remove(todo)}>Удалить</Button>
            </div>
        </div>
    )
}

export default TodoItem