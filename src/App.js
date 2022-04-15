import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Post from './Pages/Post';
import CreateNote from './Pages/CreatePost';
import Layouts from './Components/Layouts';
import Login from './Pages/Login';
import Users from './Pages/Users'
import Channels from './Pages/Channels'
import Categories from './Pages/Categories'
import Profile from './Pages/Profile'
import Admin from './Pages/Admin';

function App() {

  function RequireAuth({ children }) {
    return <Layouts><Outlet /></Layouts>
  }


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={< RequireAuth />} >
            <Route exact path="/dashboard" element={<Post />} />
            <Route exact path="/create" element={<CreateNote />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/channels" element={<Channels />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/admins" element={<Admin />} />
          </Route>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
