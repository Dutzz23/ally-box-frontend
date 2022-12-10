import axios from "axios";

/**
 * Hello
 */
export default class ApiConfig {
    /**
     * @type {string}
     * @desc URL that will be used for API connection
     */
    #baseUrl = 'localhost:30001';

    /**
     * @desc The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
     * @param {string} [url identifier to connect to the server]
     * @return {Object|Error} requested object or request/connection error
     */
    getRequest(url) {
        axios.get({
            url: this.#baseUrl + url,
            timeout: 1000
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
            return null;
        })
    }

    /**
     * @desc The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    postRequest(url, data, id = null) {
        if (id !== null) {
            id = "/" + id;
        }
        axios.post({
            url: this.#baseUrl + url + id,
            data: data,
            timeout: 1000
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
            return null;
        })
    }

    /**
     * @desc The PUT method replaces all current representations of the target resource with the request payload.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */

    putRequest(url, data, id = null) {
        if (id !== null) {
            id = "/" + id;
        }
        axios.put({
            url: this.#baseUrl + url + id,
            data: data,
            timeout: 1000
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
            return null;
        })
    }

    /**
     * @desc The PATCH method applies partial modifications to a resource.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    patchRequest(url, data, id = null) {
        if (id !== null) {
            id = "/" + id;
        }
        axios.patch({
            url: this.#baseUrl + url + id,
            data: data,
            timeout: 1000
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
            return null;
        })
    }

    /**
     * @desc The DELETE method deletes the specified resource.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    deleteRequest(url, id = null) {
        if (id !== null) {
            id = "/" + id;
        }
        axios.delete({
            url: this.#baseUrl + url,
            timeout: 1000
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
            return null;
        })
    }
}