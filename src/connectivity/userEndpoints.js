import ApiConfig from "./ApiConfig";

const Api = new ApiConfig();
const endpointUrl = '/users';

export function getUser() {
    return Api.getRequest(endpointUrl);
}

export function createUser(data, id=null){
    return Api.postRequest(endpointUrl, data, id);
}

export function updateUser(data, id=null){
    return Api.patchRequest(endpointUrl, data, id);
}

export function deleteUser(id=null){
    return Api.deleteRequest(endpointUrl, id);
}