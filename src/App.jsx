import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Routing from "./routing/Routing";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <Navbar />
      {path === "/" ? <Hero /> : ""}
      <Routing />
    </div>
  );
}

export default App;
