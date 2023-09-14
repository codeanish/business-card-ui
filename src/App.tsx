import Card from "./components/Card"
import DarkModeToggle from "./components/DarkModeToggle"

function App() {

  return (
    <div className="App h-screen bg-gray-200 dark:bg-gray-900">
          <div className="relative ml-3 inline-flex items-center">
            <DarkModeToggle/>
          </div>
      <Card/>
    </div>
  )
}

export default App
