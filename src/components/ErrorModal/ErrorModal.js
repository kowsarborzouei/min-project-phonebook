import Card from "../Card/Card";
import classes from './ErrorModal.module.css'
function ErrorModal(props){
    return(
        <div>
            <div className={classes.backdrop}/>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <button className={classes.buttonError}>Okey</button>
                </footer>
            </div>
        </div>

    )
}
export default ErrorModal