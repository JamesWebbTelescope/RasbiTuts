import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import StudentsPage from "./pages/Students";
import TutorialsPage from "./pages/Tutorials";


export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<StudentsPage/>}/>
        <Route path="/" element={<TutorialsPage/>}/>
      </Routes>
    </HashRouter>
  );
}
