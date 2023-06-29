import Title from "./UI/title/Title"
import TodoModel from "./TodoModel"
import { useEffect, useState } from "react"

const TodoListTitle = ({todos}: { todos: TodoModel[]}) => {
    const [title, setTitle] = useState('Todo Tasks')
    
    useEffect(() => {
        if (!todos.length) {
            setTitle("no one Todo Task")
        } else setTitle("Todo Tasks")
    }, [todos])

    return(
        <Title>
            {title}
        </Title>
    )
}

export default TodoListTitle