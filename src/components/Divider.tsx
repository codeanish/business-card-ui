
type Props = {
    title: string
    }

const Divider = (props : Props) => {
    return (
      <div className="relative py-5 bg-gray-50 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="mx-10 w-full border-t border-gray-300 dark:border-gray-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-50 dark:bg-gray-700 px-3 text-base font-semibold leading-6 text-gray-800 dark:text-gray-300">{props.title}</span>
        </div>
      </div>
    )
  }

export default Divider;