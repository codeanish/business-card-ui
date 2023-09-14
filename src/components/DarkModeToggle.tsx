

import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
// import useDarkSide from '../hooks/useDarkSide';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const DarkModeToggle = () => {

  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    console.log("useEffect")
    console.log(colorTheme)
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(colorTheme);
  }

  return (

    
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={classNames(
        darkMode ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          darkMode ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-50 shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  )
}

export default DarkModeToggle;