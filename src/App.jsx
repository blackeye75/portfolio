import "./App.css";
import Footer from "./Components/footer/Footer";
import { Header } from "./Components/header/Header";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
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
