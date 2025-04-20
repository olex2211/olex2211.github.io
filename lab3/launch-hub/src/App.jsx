import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Investors from "./pages/investors.jsx";
import Market from "./pages/market.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
