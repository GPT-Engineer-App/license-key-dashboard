import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import GenerateKeys from "./pages/GenerateKeys.jsx";
import UsedKeys from "./pages/UsedKeys.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/generate-keys" element={<GenerateKeys />} />
        <Route path="/used-keys" element={<UsedKeys />} />
      </Routes>
    </Router>
  );
}

export default App;
