import API from '../API/api';

export const Login = (user) => {
    console.log(user);
    console.log(process.env.REACT_APP_API_KEY);
    return API.post('/admin/login', user);
}

export const GetChannelsData = async () => {
    console.log(process.env.REACT_APP_API_KEY+'/channels/get');
    return await API.get('/channel/get');
}

export const GetCategoriesData = async () => {
    return await API.get('/category/get');
}

export const GetUsersData = async () => {
    return await API.get('/user/get')
}

export const GetAdminsData = async () => {
    return await API.get('/admin/get')
}