import axios from "axios";

/**
 * @desc URL that will be used for API connection is set as value to "proxy" in package.json
 */
export default class ApiConfig {
    /**
     * @desc The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
     * @param {string} [url identifier to connect to the server]
     * @return {Object|Error} requested object or request/connection error
     */
    getRequest = async (url) => {
        try {
            return await axios.get(url )
        } catch (error) {
            console.log(Error(error))
        }
    }

    getRequestById = async (url, id) => {
        try {
            return await axios.get(url + `/${id}`, {
                timeout: 1000
            })
        } catch (error) {
            console.log(Error(error))
        }
    }

    /**
     * @desc The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    postRequest = async (url, data, id = null) => {
        try {
            if (id !== null) {
                id = "/" + id;
            }
            return await axios.post(url + id, {
                data: data, timeout: 1000
            })
        } catch (error) {
            console.log(Error(error));
        }
    }

    /**
     * @desc The PUT method replaces all current representations of the target resource with the request payload.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */

    putRequest = async (url, data, id = null) => {
        try {
            if (id !== null) {
                id = "/" + id;
            }
            return await axios.put(url + id, {
                data: data, timeout: 1000
            })
        } catch (error) {
            console.log(Error(error));
        }
    }

    /**
     * @desc The PATCH method applies partial modifications to a resource.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {Object} [data - mapped resource to pass for request]
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    patchRequest = async (url, data, id = null) => {
        try {
            if (id !== null) {
                id = "/" + id;
            }
            return await axios.patch(url + id, {
                data: data, timeout: 1000
            })
        } catch (error) {
            console.log(Error(error));
        }
    }

    /**
     * @desc The DELETE method deletes the specified resource.
     * @param {string} [url - identifier to connect to the server]     * @param data
     * @param {string} [id - resource's id to pe recognized by the server]
     * @return {status|Error} status of the request or request/connection error
     */
    deleteRequest = async (url, id = null) => {
        try {
            if (id !== null) {
                id = "/" + id;
            }
            return await axios.delete(url + id, {
                timeout: 1000
            })
        } catch (error) {
            console.log(error);
        }
    }
}