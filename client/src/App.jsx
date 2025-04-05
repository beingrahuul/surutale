import './App.css'

//components  
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Companies from './components/Companies'
import Why from './components/Why'
import Package from './components/Package'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <Companies />
      <Why />
      <Package />
    </div>
  )
}

export default App
