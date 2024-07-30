import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
