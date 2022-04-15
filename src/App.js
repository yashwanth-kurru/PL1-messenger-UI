import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Notes from './Pages/Notes';
import CreateNote from './Pages/CreateNote';
import Layouts from './Components/Layouts';
import Login from './Pages/Login';

function App() {

  function RequireAuth({ children }) {
    return <Layouts><Outlet /></Layouts>
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={< RequireAuth />} >
            <Route exact path="/notes" element={<Notes />} />
            <Route exact path="/create" element={<CreateNote />} />
          </Route>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
