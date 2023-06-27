import {useState, FC} from "react"
import Input from "./UI/input/Input"
import Button from "./UI/button/Button"

const TodoForm: FC<{create: any}> = ({create}) => {
    const [post, setPost] = useState({title:'', description:''})

    const addNewPost = (e: any) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", description: ""})
    }
    return(
        <form>
            <Input
                onChange={e => setPost({...post, title:e.target.value})}
                value={post.title}
                placeholder="Input Title"
            />
            <Input
                onChange={e => setPost({...post, description: e.target.value})}
                value={post.description}
                placeholder="Input Description"
            />
            <Button style={{margin: "5px 0"}} onClick={addNewPost}>
                Create Task
            </Button>
        </form>
    )
}

export default TodoForm