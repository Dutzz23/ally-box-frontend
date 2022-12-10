import UserEntity from "../entities/UserEntity";

function userMapper(user) {
    const userData = user.data;

    if (userData === null) {
        console.log("User is not an object: null");
        return;
    }
    if (typeof userData.id !== "number") {
        console.log("User id is not a number: ", typeof userData.id);
        return;
    }
    if (typeof userData.username !== "string") {
        console.log("User username is not a string: ", typeof userData.username);
        return;
    }
    if (typeof userData.dateOfBirth !== "string") {
        console.log("User dateOfBirth is not a string: ", typeof userData.dateOfBirth);
        return;
    }
    if (typeof userData.email !== "string") {
        console.log("User email is not a string: ", typeof userData.email);
        return;
    }
    if (typeof userData.avatar !== "string" && userData.avatar !== null) {
        console.log("User avatar is not a string or null: ", typeof userData.avatar);
        return;
    }

    return new UserEntity(
        userData.id,
        userData.username,
        userData.dateOfBirth,
        userData.email,
        userData.avatar
    )
}

export default userMapper;