class UserEntity {
    /**
     * @type number
     */
    #id;
    
    /**
     * @type string
     */
    #username;
    
    /**
     * @type Date
     */
    #dateOfBirth;
    
    /**
     * @type string
     */
    #email;
    
    /**
     * @type webkitURL
     */
    #avatar;

    constructor(id, username, dateOfBirth, email, avatar) {
        this.#id = id;
        this.#username = username;
        this.#dateOfBirth = dateOfBirth;
        this.#email = email;
        this.#avatar = avatar;
    }


    get id() {
        return this.#id;
    }

    get username() {
        return this.#username;
    }

    get dateOfBirth() {
        return this.#dateOfBirth;
    }

    get email() {
        return this.#email;
    }

    get avatar() {
        return this.#avatar;
    }
}

export default UserEntity;