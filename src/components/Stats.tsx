import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import User from '../types/User'
import StatCard from './StatCard'

const Stats = ({user}:{user:User}) => {
  
  return (
    <div>
      <dl className="p-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard name='Github Commits' url={user.GithubUrl} stat={user.GithubTotalCommits} icon={<UsersIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
          <StatCard name='Leetcode Ranking' url={user.LeetcodeUrl} stat={user.LeetcodeRanking} icon={<EnvelopeOpenIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
          <StatCard name='Stack Overflow Reputation' url={user.StackOverflowUrl} stat={user.StackOverflowReputation} icon={<CursorArrowRaysIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
      </dl>
    </div>
  )
}

export default Stats
