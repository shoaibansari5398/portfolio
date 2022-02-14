import React from "react";
import Card from "./Components/Card";
import About from "./Components/About";
import Skills from "./Components/Skills";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Card />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
