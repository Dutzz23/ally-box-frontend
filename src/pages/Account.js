import {useEffect, useState} from "react";
import "../assets/css/account.css";
import PageLayout from "../components/PageLayout";
import {getUser} from "../connectivity/userEndpoints";
import UserMapper from "../mappers/userMapper";
import userMapper from "../mappers/userMapper";

const Account = (props) => {
    //TODO set all of them with null
    const [userData, setUserData] = useState({
        id: 1,
        username: "Gigel",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg'
    })
    useEffect(() => fetchData(), []);


    const fetchData = ()=>{
        getUser().then((result)=>{
            const mappedData = userMapper(result);
            setUserData(mappedData);
        })

    }

    const content = <div>
        <h1 className={"d-block mb-4"}>Your account</h1>
        <span className={"indicationTitle"}>Avatar: </span>
        <img src={userData.avatar} alt={"User avatar"} className={"my-2 avatar"}/>
        <div className={"my-2"}><span className={"indicationTitle"}>Username: </span>{userData.username}</div>
        <button className={"my-2 changePasswordButton"}>Change password</button>
    </div>


    return (<PageLayout pageContent={content}/>)
}

export default Account;