import styles from "./Modal.module.css"

const Modal = ({children, visible, setVisible, onClick}: any) => {
    const modalClasses = [styles.modal__window]

    if(visible) {
        modalClasses.push(styles.active)
    }
    return(
        <div className={modalClasses.join(' ')} onClick={onClick}>
            <div 
                className={styles.modal__content} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal