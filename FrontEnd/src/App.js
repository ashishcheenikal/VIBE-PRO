import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/index';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}

export default App;
