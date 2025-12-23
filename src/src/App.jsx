import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="brand">עידן צעצועים</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="footer">
        © {new Date().getFullYear()} עידן צעצועים
      </footer>
    </div>
  );
}
