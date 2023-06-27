import styles from "./Button.module.css"
import {FC, PropsWithChildren} from "react"
import { MyButton } from "./Button.interface"

const Button: FC<PropsWithChildren<MyButton>> = ({
    children,
    className,
    ...props
}) => {
    return(
        <div>
            <button {...props} className={styles.button}>
                {children}
            </button>
        </div>
    )
}

export default Button