import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import routes from "./routes";
import Sidebar from "./components/Sidebar";

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
        <Route path="/" element={<routes.ConstructorPage />} />
        <Route path="/viewer" element={<routes.ViewerPage />} />
        <Route path="/data" element={<routes.DataPage />} />
       </Routes>
      </div>
    </div>
  );
}

export default App;
