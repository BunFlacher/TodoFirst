import styles from "./Title.module.css"

const TodoListTitle = ({children}: any) => {
    return(
        <h1 className={styles.title}>
            {children}
        </h1>
    )
}

export default TodoListTitle