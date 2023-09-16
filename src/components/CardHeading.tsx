import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import DarkModeToggle from './DarkModeToggle'

const CardHeading = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:px-6 rounded-t-lg">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Anish Patel</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href="#">@codeanish</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex flex-shrink-0">
            <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
            <span>Phone</span>
        </button>
        <button
                type="button"
                className="relative ml-3 inline-flex items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
            <span>Email</span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default CardHeading