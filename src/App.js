import './App.css';
import Search from "./components/search/Search";
import Card from "./components/Card/Card";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import newAvatar from './images/newavatar.png';
import avatar1 from './images/kowsar.jpg';
import avatar2 from './images/Zahra.png';
import avatar3 from './images/Narges.png';
import avatar4 from './images/Sima.png';
import avatar5 from './images/Shahrzad.png';
import {useState} from "react";


function App() {


    const users = [
        {
            id: 1,
            img: avatar1,
            firstName: "kowsar",
            lastName: "Borzuei",
            phone: "09150619413",
            email: "k.borzuei@gamil.com"
        },
        {
            id: 2,
            img: avatar3,
            firstName: "Narges",
            lastName: "Javan",
            phone: "09130000000",
            email: "k.borzuei@gamil.com"
        },
        {
            id: 3,
            img: avatar2,
            firstName: "Zahra",
            lastName: "Amini",
            phone: "09170000000",
            email: "a.dosti@gamil.com"
        },
        {
            id: 4,
            img: avatar4,
            firstName: "Sima",
            lastName: "Sohrab",
            phone: "09130000000",
            email: "s.sohrab@gamil.com"
        },
        {
            id: 5,
            img: avatar5,
            firstName: "Shahrzad",
            lastName: "Miri",
            phone: "09150000000",
            email: "sh.miri@gamil.com",
        },
    ]
    const [usersList, setUsersList] = useState(users)
    const [user, setUser] = useState({img: newAvatar, firstName: '', lastName: '', phone: '', email: ''})
    const [mood, setMood] = useState('Create')
    const [filter, setFilter] = useState('')
    const [error, setError] = useState()

    const deleteHandler = (id) => {

        setUsersList(usersList.filter(item => item.id !== id))
    }
    const addHandler = (e) => {
        e.preventDefault();
        console.log(user.firstName)
        // user.map(user=>user.firstName.trim().length === 0 || user.lastName.trim().length === 0 || user.email.trim().length === 0 || user.phone.trim().length === 0)
        if (e.target.firstName.value.trim().length === 0) {
            setError({
                title:"Invalid input",
                message:"please enter a valid for ّfirstName",
            })
            return ;
        }
        if (e.target.phone.value.trim().length !== 11) {
            setError({
                title:"Invalid input",
                message:"please enter a valid for phone with 11 digits ",
            })
            return ;
        }
        if (mood == 'Update') {
            setUsersList(usersList.map(item => user.id === item.id ? user : item))
        } else {
            setUsersList([...usersList, {id: Math.random().toString(), ...user}])
        }
        setUser({img: newAvatar, firstName: '', lastName: '', phone: '', email: ''})
        setMood('Create')
    }
    const errorHandler=()=>{
        setError(null)
    }


    const changeHandler = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        // const {name,value}=e.target
        // setUser({...user,[name]:value})
    }

    return (
        <div>
            {/**************************ErrorModal**************************/}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <div className="App">
                <form onSubmit={addHandler} className={"input"}>
                    <img className={"img--fix"} src={newAvatar} name={'img'} value={user.img} onChange={changeHandler}
                         alt={'pro'}/>
                    <input placeholder={'First Name'} type={"text"} name={'firstName'} value={user.firstName}
                           onChange={changeHandler}/>
                    <input placeholder={"Last Name"} type={"text"} name={'lastName'} value={user.lastName}
                           onChange={changeHandler}/>
                    <input required={''} placeholder={"Phone Number"} type={"text"} name={'phone'} value={user.phone}
                           onChange={changeHandler}/>
                    <input placeholder={"Email"} type={"email"} name={'email'} value={user.email}
                           onChange={changeHandler}/>
                    <button className={"buttonForm"} type={"submit"}>{mood}</button>
                </form>

                <div className={"output"}>
                    <div className={"titleSearch"}>
                        <h1>Phone Book</h1>
                        <Search filter={filter} setFilter={setFilter}/>
                    </div>

                    {usersList.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase())).map((item) => (
                        <Card key={item.id}>
                            <div className={'img--input'}>
                                <img className={"img--card"} src={item.img}/>
                                <div>
                                    {item.firstName}{item.lastName}
                                    <div>
                                        {item.phone}
                                    </div>
                                </div>
                            </div>
                            <div className={"button--du"}>
                                <button onClick={() => {
                                    setUser(item);
                                    setMood('Update')
                                }}>Update
                                </button>
                                <button onClick={() => {
                                    deleteHandler(item.id)
                                }}>Delete
                                </button>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </div>


    );
}

export default App;
