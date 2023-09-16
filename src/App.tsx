import Card from "./components/Card"
import DarkModeToggle from "./components/DarkModeToggle"
import PageHeader from "./components/PageHeader"

function App() {

  return (
    <div className="App h-screen bg-gray-200 dark:bg-gray-900">
        <PageHeader/>
        <Card/>
    </div>
  )
}

export default App
