import Header from "./Components/Header";
import Contant from "./Components/Contant";
import "./App.css";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Customer from "./Components/Customer";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contant" element={<Contant />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Customer />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
