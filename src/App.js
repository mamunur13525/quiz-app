import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizView from "./components/Quiz/QuizView";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/view" element={<QuizView  />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
