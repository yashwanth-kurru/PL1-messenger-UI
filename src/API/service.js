import API from '../API/api';

export const Login = (user) => {
    console.log(user);
    console.log(process.env.REACT_APP_API_KEY+'/admin/login');
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

export const UpdateAdminData = async(admin) =>{
    return await API.put('/admin/update',admin)
}

export const UpdateChannelData = async(channel) =>{
    return await API.put('/channel/update',channel)
}

export const UpdateCategoryData = async(category) =>{
    return await API.put('/category/update',category)
}


export const deleteAdminData = async(admin) =>{
    console.log(admin);
    return await API.delete('/admin/delete',admin)
}

export const deleteChannelData = async(channel) =>{
    console.log(channel);
    return await API.delete('/channel/delete',channel)
}

export const deleteCategoryData = async(category) =>{
    console.log(category);
    return await API.delete('/admin/delete',category)
}