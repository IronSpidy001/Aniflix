import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "./components/login-screen/Login"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
