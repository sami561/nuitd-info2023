import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Game from "./components/Game";
import Home from "./pages/Home";

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const NotFound = () => <h2>Page Not Found</h2>;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div className="App">
              <Game rows={20} columns={10} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
