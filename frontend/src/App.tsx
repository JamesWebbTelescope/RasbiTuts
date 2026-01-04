import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import StudentsPage from "./pages/Students";
import TutorialsPage from "./pages/Tutorials";


export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/RasbiTuts" element={<Home />} />
        <Route path="/RasbiTuts/students" element={<StudentsPage/>}/>
        <Route path="/RasbiTuts/tutorials" element={<TutorialsPage/>}/>
      </Routes>
    </HashRouter>
  );
}
