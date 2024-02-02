import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="text-2xl text-blue-font font-roboto bg-primary-background h-screen w-screen">
      <Router>
        <div className="w-full h-[60px] bg-dark-font">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-clothing" element={<Men />} />
          <Route path="/womens-clothing" element={<Women />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
