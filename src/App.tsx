import Router from "./router"
import PageHeader from "./components/PageHeader"

function App() {

  return (
    <div className="App h-screen bg-gray-200 dark:bg-gray-900">
        <PageHeader/>
        <Router/>
    </div>
  )
}

export default App
