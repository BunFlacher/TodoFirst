import Input from "./UI/input/Input"
import Button from "./UI/button/Button"
import Modal from "./UI/modal/Modal"
import {FC, useState} from "react"
import TodoModel from "./TodoModel"

const TodoItemEdit: FC<{todo: TodoModel, visible: boolean, setVisible: any}> = ({
    todo, 
    visible, 
    setVisible
    }) => {
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [titleWarning, setTitleWarning] = useState(false)

    const editClear = () => {
        setTitle(todo.title)
        setDescription(todo.description)
        setVisible(false)
        setTitleWarning(false)
    }
    const editAccept = () => {
        if (title.trim().length < 5) {
            setTitleWarning(true)
            return
        }
        todo.title = title
        todo.description = description
        setVisible(false)
        setTitleWarning(false)
    }

    return(
        <Modal visible={visible} setVisible={setVisible} onClick={() => editClear()}>
            <div>
                {titleWarning && (
                    <h3 style={{color: "rgb(255,255,255)"}}>Input Title needs 5 simbols</h3>
                )}
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Input Title"
                />
                <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Input Description"
                />
            </div>
            <div className="button__edit">
                <Button 
                    style={{marginRight: "10px", fontSize: "18px", padding: "5px 30px"}} 
                    onClick={() => editAccept()}
                >Accept
                </Button>
                <Button 
                    style={{marginLeft: "10px", fontSize: "18px", padding: "5px 30px"}} 
                    onClick={() => editClear()}
                >Cancel
                </Button>
            </div>
        </Modal>
    )
}

export default TodoItemEdit