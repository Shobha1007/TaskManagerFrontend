import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddTasks from './tasks/AddTasks';
import EditTasks from './tasks/EditTasks';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/addtask" element={<AddTasks/>}></Route>
        <Route exact path="/edittask/:id" element={<EditTasks/>}></Route>
        

      </Routes>
      </Router>
    </div>
  );
}

export default App;
