import React, { useEffect } from 'react';
import CardHeading from './CardHeading';
import SocialLinks from './SocialLinks';
import Stats from './Stats';
import Tools from './Tools';
import Companies from './Companies';
import getUser from '../services/UserService';
import { useParams } from 'react-router-dom';
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
        Infrastructure: []
    });
    
    type CardParams = {
        username: string;
    }
    const { username } = useParams<CardParams>();


    useEffect(() => {
        fetchUser();
        getLeetcodeRanking();
    },[]);

    const fetchUser = () => {
        if(username){
            UserService.getUser(username)
            .then((user) => {
                setUser(user)
            });
        }
    }

    const getLeetcodeRanking = () => {
        LeetcodeService.getUserRanking("codeanish")
        .then((ranking) => {
            console.log(ranking);
        })
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

// export default function Example() {
//     return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
//   }
  