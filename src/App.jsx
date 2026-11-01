import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
