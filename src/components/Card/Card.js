import classes from '../Card/Card.module.css'


const Card=(props)=>{
    return(
        <div onClick={props.onClick} className={`${classes.Card} `}>{props.children} </div>
    )
}
export default Card