import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./home/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout anotherComponent={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
