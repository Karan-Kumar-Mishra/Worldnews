import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import './styles/globals.css'
import CardSection from "./components/CardSection";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<CardSection />} path="/news" />
      <Route element={<Feedback />} path="/feedback" />
    </Routes>
  );
}

export default App;
