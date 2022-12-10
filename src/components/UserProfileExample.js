import React, {useEffect, useState} from 'react';
import {getUser} from "../connectivity/userEndpoints";
import userMapper from "../mappers/userMapper";
import "../assets/css/";

const UserProfileExample = props => {
    const [username, setUsername] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        let requestedData = getUser(props.userId);
        if (requestedData !== null) {
            requestedData = userMapper(requestedData);
        }
        if (requestedData !== null) {
            setUsername(requestedData.username);
            setEmail(requestedData.email);
            setDateOfBirth(requestedData.dateOfbirth);
            setAvatar(requestedData.avatar);
        }
    }, [])
    return (
        <>
            <img src={avatar} alt={"user avatar"}/>
            <div className="userData-container">
                <h1>Hello. My name is {username}</h1>
                <p>My date of birth is {dateOfBirth} and my email is {email}</p>
            </div>
        </>
    );
};

UserProfileExample.propTypes = {
    userId: 1
};

export default UserProfileExample;