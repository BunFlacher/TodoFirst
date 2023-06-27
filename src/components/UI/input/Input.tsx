import { FC } from "react"
import { MyInput } from "./Input.interface"
import styles from "./Input.module.css"

const Input: FC<MyInput> = (props) => {
    return(
        <input type="text" className={styles.input} {...props}/>
    )
}

export default Input