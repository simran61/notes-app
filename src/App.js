import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage, Notespage } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<Notespage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
