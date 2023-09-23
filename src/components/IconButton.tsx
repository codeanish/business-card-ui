type Props = {
    icon: React.JSX.Element
    onClick: () => void
    text: string
    }

const IconButton = (props: Props) => {
  return (
  <button 
    type="button"
    className="relative ml-3 inline-flex items-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={props.onClick}>
    {props.icon}
    <span>{props.text}</span>
  </button>
  )
};

export default IconButton;