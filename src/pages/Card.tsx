import React, { useEffect } from 'react';
import CardHeading from '../components/CardHeading';
import SocialLinks from '../components/SocialLinks';
import Stats from '../components/Stats';
import Tools from '../components/Tools';
import Companies from '../components/Companies';
import { useNavigate, useParams } from 'react-router-dom';
import User from '../types/User';
import UserService from '../services/UserService';
import LeetcodeService from '../services/LeetcodeService';
import GithubService from '../services/GithubService';
import StackOverflowService from '../services/StackOverflowService';
import PageHeader from '../components/PageHeader';

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
                const leetcodeUser = user.LeetcodeUrl.split("/").pop();
                if (!leetcodeUser) {
                    throw new Error("Leetcode username not found");
                }
                const leetcode = LeetcodeService.getStats(leetcodeUser)
                const githubUser = user.GithubUrl.split("/").pop();
                if (!githubUser) {
                    throw new Error("Github username not found");
                }
                const github = GithubService.getTotalCommits("codeanish")
                const stackOverflowSplitUrl = user.StackOverflowUrl.split("/");
                const stackOverflowId = stackOverflowSplitUrl[stackOverflowSplitUrl.length - 2]
                if (!stackOverflowId) {
                    throw new Error("Stackoverflow ID not found");
                }
                const stackOverflow = StackOverflowService.getReputation(user.Username, parseInt(stackOverflowId))
                Promise.all([leetcode, github, stackOverflow]).then((values) => {
                    setUser({...user, LeetcodeRanking: values[0].ranking, GithubTotalCommits: values[1].total_commits, StackOverflowReputation: values[2].reputation});
                })
            })
            .catch((err) => {
                console.log(err)
                navigate('/404');
            });
        }
    }

    return (
        <>
        <PageHeader/>
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
            <CardHeading user={user}/>
            <Stats user={user}/>
            <Tools user={user}/>
            <Companies/>
            <SocialLinks/>
        </div>
        </>
    )
}

export default Card;
