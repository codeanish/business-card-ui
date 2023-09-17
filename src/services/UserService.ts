import axios from 'axios';
import User from '../types/User';

const getUser = (username: string): Promise<User> =>  {
    let response = axios.get(`http://localhost:8080/${username}`)
    .then(response => {
        return response.data as User;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
    return response;
    }

const UserService = {
    getUser
}

export default UserService; 