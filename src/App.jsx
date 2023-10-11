import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./home/index";
import About from "./pages/About";
import Acchivement from "./pages/Acchivement";
import ProductionProcess from "./pages/ProductionProcess.jsx";
import Capacity from "./pages/Capacity.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout anotherComponent={<Home />} />} />
        <Route
          path="/about"
          element={<Layout anotherComponent={<About />} />}
        />
        <Route
          path="/acchivement"
          element={<Layout anotherComponent={<Acchivement />} />}
        />
        <Route
          path="/production-process"
          element={<Layout anotherComponent={<ProductionProcess />} />}
        />
        <Route
          path="/capacity"
          element={<Layout anotherComponent={<Capacity />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
