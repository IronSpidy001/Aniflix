import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "./components/login-screen/Login"
import Home from "./components/Home/Home"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
