import {useState, FC} from "react"
import Input from "./UI/input/Input"
import Button from "./UI/button/Button"


const TodoForm = ({
    create,
    post,
    setPost,
    titleWarning,
    setTitleWarning,
    }: any) => {
    

    const addNewPost = (e: any) => {
        e.preventDefault()
        if(post.title.trim().length < 5) {
            setTitleWarning(true)
            return
        }
        create(post) // отправляем title и description
        setPost({title: "", description: ""})
        setTitleWarning(false)
    }

    return(
        <form>
            {titleWarning && (
                <h3 style={{color: "rgb(255,255,255)"}}>
                    Input Title needs 5 simbols
                </h3>
            )}
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
            <Button 
                style={{margin: "5px 0", padding: "7px", fontSize: "18px"}} 
                onClick={addNewPost}
            >
                Create Task
            </Button>
        </form>
    )
}

export default TodoForm