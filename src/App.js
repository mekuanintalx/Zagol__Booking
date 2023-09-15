import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import Sign from "./Pages/Sign/Sign";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flight" element={<Hotels />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
