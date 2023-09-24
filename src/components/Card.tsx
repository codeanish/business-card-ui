import React, { useEffect } from 'react';
import CardHeading from './CardHeading';
import SocialLinks from './SocialLinks';
import Stats from './Stats';
import Tools from './Tools';
import Companies from './Companies';
import { useNavigate, useParams } from 'react-router-dom';
import User from '../types/User';
import UserService from '../services/UserService';
import LeetcodeService from '../services/LeetcodeService';
import GithubService from '../services/GithubService';
import StackOverflowService from '../services/StackOverflowService';

const Card = () => {
    const [user, setUser] = React.useState<User>({
        Name: '',
        Username: '',
        Email: '',
        ProgrammingLanguages: [],
        GithubUrl: '',
        LeetcodeUrl: '',
        DataStorage: [],
        Infrastructure: [],
        LeetcodeRanking: 0,
        GithubTotalCommits: 0,
        StackOverflowUrl: '',
        StackOverflowReputation: 0,
    });
    
    type CardParams = {
        username: string;
    }
    const { username } = useParams<CardParams>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    },[]);

    const fetchUser = () => {
        if(username){
            UserService.getUser(username)
            .then((user) => {
                const leetcode = LeetcodeService.getStats("codeanish")
                const github = GithubService.getTotalCommits("codeanish")
                const stackOverflow = StackOverflowService.getReputation("codeanish", 208831)
                Promise.all([leetcode, github, stackOverflow]).then((values) => {
                    setUser({...user, LeetcodeRanking: values[0].ranking, GithubTotalCommits: values[1].total_commits, StackOverflowReputation: values[2].reputation});
                })
            })
            .catch(() => {
                navigate('/404');
            });
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
            <CardHeading user={user}/>
            <Stats user={user}/>
            <Tools user={user}/>
            <Companies/>
            <SocialLinks/>
        </div>
    )
}

export default Card;
