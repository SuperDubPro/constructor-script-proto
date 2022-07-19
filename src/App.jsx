import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Sidebar from "./components/Sidebar"
import pages from "./components/pages"

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Sidebar>
        <Link to="/" >Constructor</Link>
        <Link to="/viewer" >Viewer</Link>
        <Link to="/data" >Data</Link>
      </Sidebar>
      <div className="page">
       <Routes>
        <Route path="/" element={<pages.Constructor />} />
        <Route path="/viewer" element={<pages.Viewer />} />
        <Route path="/data" element={<pages.DataSettings />} />
       </Routes>
      </div>
    </div>
  );
}

export default App;
