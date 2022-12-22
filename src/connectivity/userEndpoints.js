import ApiConfig from "./ApiConfig";

const Api = new ApiConfig();
const endpointUrl = '/users';

export const getUser = async () => {
    return Api.getRequest(endpointUrl);
}
export const createUser = async (data, id) => {
    return Api.postRequest(endpointUrl, data, id);
}

export const updateUser = async (data, id) => {
    return Api.patchRequest(endpointUrl, data, id);
}

export const deleteUser = async (id) => {
    return Api.deleteRequest(endpointUrl, id);
}