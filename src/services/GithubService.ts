import axios from "axios";
import GithubStats from "../types/GithubStats";

const getTotalCommits = (username: string) : Promise<GithubStats> => {
    let response = axios.get(`http://localhost:8080/users/${username}/github`)
    .then(response => {
        return response.data as GithubStats;
    })
    .catch(error => {
        console.log(error);
        throw error;
    });
    return response;
}

const GithubService = {
    getTotalCommits
}

export default GithubService;