import Card from "../Card/Card";
import classes from './ErrorModal.module.css'
function ErrorModal(props){
    return(
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <h4>{props.message}</h4>
                </div>
                <footer className={classes.actions}>
                    <button className={classes.buttonError} onClick={props.onConfirm}>Okey</button>
                </footer>
            </div>
        </div>

    )
}
export default ErrorModal