import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";

function App() {
  return (
    <div className="bg-primary-background h-screen w-screen">
      <Router>
        <div className="w-full mobile:h-[8vh] laptop:h-[11vh] flex justify-center items-center border-b-2 border-border">
          <h1 className="font-roboto font-bold mobile:text-[20px] tablet:text-[25px] laptop:text-[35px] text-dark-font">
            <Link to={"/"}>Modern Walk</Link>
          </h1>
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
