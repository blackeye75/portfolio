import './App.css'
import LandingPage from './Components/LandingPage'
import Footer from './Components/footer/Footer'
import { Header } from './Components/header/Header'

function App() {

  return (
    <div className='bg-[#121212] min-h-screen w-full text-white' >
    <Header/>
    <LandingPage/>
    <Footer/>
    </div>
  )
}

export default App
