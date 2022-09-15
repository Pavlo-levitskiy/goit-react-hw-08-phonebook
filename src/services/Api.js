import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getData = (endpoint) => axios.get(endpoint);

const saveItem = (endpoint, item) => axios.post(endpoint, item);

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, saveItem, deleteItem };
