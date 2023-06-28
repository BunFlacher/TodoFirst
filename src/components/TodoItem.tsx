import TodoModel from "./TodoModel"
import {FC, useState} from "react"
import Button from "./UI/button/Button"
import TodoItemEdit from "./TodoItemEdit"

const TodoItem: FC<{ todo: TodoModel, remove: any}> = ({todo, remove}) => {
    const [visible, setVisible] = useState(false)

    return(
        <div className="todo">
            <TodoItemEdit visible={visible} setVisible={setVisible} todo={todo}/>
            <div style={{backgroundColor: "rgb(255,255,255)", marginRight: "5px"}}>
                <strong style={{backgroundColor: "rgb(255,255,255)"}}>{todo.id}. {todo.title}</strong>
                <div style={{ backgroundColor: "rgb(255,255,255)"}}>
                    {todo.description}
                </div>
            </div>
            <div style={{display: "flex", background: "rgb(255,255,255)"}}>
                <Button style={{marginRight: "15px"}} onClick={() => setVisible(true)}>Edit</Button>
                <div style={{marginLeft: "5px"}}></div>
                <Button onClick={() => remove(todo)}>Delete</Button>
            </div>
        </div>
    )
}

export default TodoItem