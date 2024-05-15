import "./App.css";
import Home from "./pages/home/home";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Maintenance from "./pages/maintenance/maintenance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
