import classes from '../search/Search.module.css'

function Search(props) {
    return (
        <div>
            <form className={classes.form}>
                <input onChange={e => props.setFilter(e.target.value)} className={classes.inputSearch}
                       placeholder={"Search... "} type={"text"} name={"search"}/>
                <button className={classes.button} type={"submit"}><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

export default Search