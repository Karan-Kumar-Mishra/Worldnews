import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import './styles/globals.css'
import Lenis from 'lenis'
import CardSection from "./components/CardSection";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on('scroll', (e) => {
   // console.log("scroll detect=> ",e);
  });
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<CardSection />} path="/news" />

    </Routes>
  );
}

export default App;
