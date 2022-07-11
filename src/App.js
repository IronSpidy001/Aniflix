import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "./components/login-screen/Login"
import Home from "./components/Home/Home"
import AnimeScreen from "./components/AnimeScreen/AnimeScreen.jsx"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AnimeScreen bannerName="banner Name" cast="cast" episodes="episodes" reviews="reviews"/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
