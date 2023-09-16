import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Github contributions (past year)', stat: '200', icon: UsersIcon, url: 'https://github.com/codeanish'  },
  { id: 2, name: 'Leetcode Rank', stat: '2,053,880', icon: EnvelopeOpenIcon, url: 'https://leetcode.com/codeanish/', },
  { id: 3, name: 'Twitter followers', stat: '97', icon: CursorArrowRaysIcon, url: 'https://twitter.com/codeanish',  },
]

const Stats = () => {
  return (
    <div>
      <dl className="p-5 bg-gray-50 dark:bg-gray-700 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-600 dark:bg-indigo-400 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{item.stat}</p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 dark:bg-gray-800 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href={item.url} className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    View
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Stats


// const stats = [
//     { name: 'Github', stat: '71,897' },
//     { name: 'Leetcode', stat: '58.16%' },
//     { name: 'Avg. Click Rate', stat: '24.57%' },
//   ]
  
//   export default function Stats() {
//     return (
//       <div>
//         <dl className="bg-white dark:bg-gray-800 py-4 px-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
//           {stats.map((item) => (
//             <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
//               <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
//               <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     )
//   }
  