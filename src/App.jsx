import './App.css'
import Footer from './Components/footer/Footer'
import { Header } from './Components/header/Header'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='bg-[#121212] min-h-screen w-full text-white' >
    <Header/>
    <HomePage/>
    <Footer/>
    </div>
  )
}

export default App
