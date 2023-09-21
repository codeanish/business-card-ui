import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import User from '../types/User'
import StatCard from './StatCard'

const stats = [
  { id: 1, name: 'Github contributions (past year)', stat: '200', icon: UsersIcon, url: 'https://github.com/codeanish'  },
  { id: 2, name: 'Leetcode Rank', stat: '2,053,880', icon: EnvelopeOpenIcon, url: 'https://leetcode.com/codeanish/', },
  { id: 3, name: 'Twitter followers', stat: '97', icon: CursorArrowRaysIcon, url: 'https://twitter.com/codeanish',  },
]

const Stats = ({user}:{user:User}) => {
  
  return (
    <div>
      <dl className="p-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard name='Github Commits (past year)' url={user.GithubUrl} stat={200} icon={<UsersIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
          <StatCard name='Leetcode Ranking' url={user.LeetcodeUrl} stat={user.LeetcodeRanking} icon={<EnvelopeOpenIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
          <StatCard name='Twitter Followers' url='https://twitter.com/codeanish' stat={97} icon={<CursorArrowRaysIcon className='h-6 w-6 text-white' aria-hidden="true"/>}/>
      </dl>
    </div>
  )
}

export default Stats
