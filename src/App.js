import logo from "./logo.svg";
import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bodySection">
        <Hero />
      </div>
    </div>
  );
}

export default App;
