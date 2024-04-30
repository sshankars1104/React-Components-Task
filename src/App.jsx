import React from "react";
import NavBar from "./assets/Components/NavBar/NavBar.jsx";
import MasterHead from "./assets/Components/MasterHead/MasterHead.jsx";
import Features from "./assets/Components/Features/Features.jsx";
import ShowCase from "./assets/Components/ShowCase/ShowCase.jsx";
import Testimonials from "./assets/Components/Testimonials/Testimonials.jsx";
import Action from "./assets/Components/Action/Action.jsx";
import Footer from "./assets/Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <MasterHead />
      <Features />
      <ShowCase />
      <Testimonials />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
