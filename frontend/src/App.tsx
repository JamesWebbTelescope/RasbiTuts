import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import StudentsPage from "./pages/Students";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
