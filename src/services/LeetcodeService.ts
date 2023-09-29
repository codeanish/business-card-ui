import axios from 'axios';
import LeetcodeStats from '../types/LeetcodeStats';

const getStats = (username: string): Promise<LeetcodeStats> =>  {
    let response = axios.get(`http://localhost:8080/users/${username}/leetcode`)
    .then(response => {
        return response.data as LeetcodeStats;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
    return response;
    }

const LeetcodeService = {
    getStats
}

export default LeetcodeService; 