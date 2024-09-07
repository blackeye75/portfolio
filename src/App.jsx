import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import Footer from "./Components/footer/Footer";
import { Header } from "./Components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <div className="bg-[#121212] min-h-screen w-full text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
