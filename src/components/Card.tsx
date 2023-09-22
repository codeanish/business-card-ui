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
                LeetcodeService.getStats("codeanish")
                .then((leetcodeStats) => {
                    user.LeetcodeRanking = leetcodeStats.ranking;
                    setUser(user);
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
