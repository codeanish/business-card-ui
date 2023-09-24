import axios from 'axios';
import StackOverflowStats from '../types/StackOverflowStats';

const getReputation = (username: string, userId: number): Promise<StackOverflowStats> =>  {
    let response = axios.get(`http://localhost:8080/${username}/stackoverflow/${userId}`)
    .then(response => {
        return response.data as StackOverflowStats;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
    return response;
    }

const StackOverflowService = {
    getReputation
}

export default StackOverflowService; 