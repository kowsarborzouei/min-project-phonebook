import './App.css';
import profile from '../src/images/img.png';
import Search from "./components/search/Search";
import Card from "./components/Card/Card";
import kowsar from './images/kowsar.jpg';
import img_1 from  './images/img_1.png'
import img2 from './images/img2.png';
import img_2 from './images/img_2.png';
import img_3 from './images/img_3.png'
import {useState} from "react";



function App() {


    const users = [
        {
            id: 1,
            img: kowsar,
            firstName: "kowsar",
            lastName: "Borzuei",
            phone: "09150619413",
            email: "k.borzuei@gamil.com"
        },
        {
            id: 2,
            img: img2,
            firstName: "Narges",
            lastName: "Javan",
            phone: "09130000000",
            email: "k.borzuei@gamil.com"
        },
        {
            id: 3,
            img: img_1,
            firstName: "Zahra",
            lastName: "Amini",
            phone: "09170000000",
            email: "a.dosti@gamil.com"
        },
        {
            id: 4,
            img: img_2,
            firstName: "Sima",
            lastName: "Sohrab",
            phone: "09130000000",
            email: "s.sohrab@gamil.com"
        },
        {
            id: 5,
            img: img_3,
            firstName: "Shahrzad",
            lastName: "Miri",
            phone: "09150000000",
            email: "sh.miri@gamil.com",
        },
    ]
    const [usersList, setUsersList] = useState(users)
    const [user, setUser] = useState({img:profile, firstName: '', lastName: '', phone: '', email: ''})
    const [mood,setMood]=useState('Create')
    const [filter,setFilter]=useState('')
    const deleteHandler = (id) => {

        setUsersList(usersList.filter(item => item.id !== id))
    }
    const addHandler = (e) => {
        e.preventDefault();
        if (mood =='Update') {
            setUsersList(usersList.map(item => user.id === item.id ? user : item))
        } else {
            setUsersList([...usersList, {id: Math.random().toString(), ...user}])
        }

        setUser({img: profile, firstName: '', lastName: '', phone: '', email: ''})
        setMood('Create')

    }
    const changeHandler = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        // const {name,value}=e.target
        // setUser({...user,[name]:value})
    }

    return (
        <div className="App">

            <form onSubmit={addHandler} className={"input"}>
                <img className={"img--fix"} src={profile} name={'img'} value={user.img} onChange={changeHandler}
                     alt={'pro'}/>
                <input placeholder={'First Name'} type={"text"} name={'firstName'} value={user.firstName}
                       onChange={changeHandler}/>
                <input placeholder={"Last Name"} type={"text"} name={'lastName'} value={user.lastName}
                       onChange={changeHandler}/>
                <input required={''} placeholder={"Phone Number"} type={"text"} name={'phone'} value={user.phone}
                       onChange={changeHandler}/>
                <input placeholder={"Email"} type={"email"} name={'email'} value={user.email} onChange={changeHandler}/>
                <button className={"buttonForm"} type={"submit"}>{mood}</button>
            </form>

            <div className={"output"}>
                <div className={"titleSearch"}>
                    <h1>Phone Book</h1>
                    <Search filter={filter} setFilter={setFilter}/>
                </div>

                {usersList.filter(item=>item.firstName.toLowerCase().includes(filter.toLowerCase())).map((item )=> (
                    <Card key={item.id} >
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
                            <button onClick={() => {setUser(item);setMood('Update')}}>Update</button>
                            <button onClick={() => {deleteHandler(item.id)}}>Delete</button>
                        </div>
                    </Card>
                ))}

            </div>
        </div>

    );
}

export default App;
