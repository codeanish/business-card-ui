import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://leetcode.com/graphql'

const getUserRanking = async (username: string): Promise<number> => {
    const query = `
    query getUserRanking($username: String!) {
        matchedUser(username: $username) {
            profile {
                ranking
            }
        }
    }
    `
    const variables = {
        username: username
    }

    const client = new GraphQLClient(endpoint, { headers: {} })
    const data = await client.request(query, variables) as any;
    return data.matchedUser.profile.ranking;
}

const LeetcodeService = {
    getUserRanking
}

export default LeetcodeService;