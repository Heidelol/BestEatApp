import React from "react";
import Food from "./components/Food";
import HeadCards from "./components/HeadCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <HeadCards />
        <Food />
    </div>
  );
}

export default App;
