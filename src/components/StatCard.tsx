
type Props = {
    stat: number
    url: string
    icon: React.JSX.Element
    name: string
}

const StatCard = (props: Props) => {
    return (
        <div
            className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-600 dark:bg-indigo-400 p-3">
                {props.icon}
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">{props.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{Intl.NumberFormat(navigator.language).format(props.stat)}</p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 dark:bg-gray-800 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href={props.url} className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    View
                  </a>
                </div>
              </div>
            </dd>
          </div>
    )
}

export default StatCard