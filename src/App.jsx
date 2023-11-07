import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/register';
import HomePage from './pages/Home/Home';
import DetailPage from './pages/Detail/Detail'
import ProfilePage from './pages/Profile/Profile';
import AddPage from './pages/AddPost/AddPost';
import HomeAfterLogin from './pages/HomeAfterLogin/Home'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomeAfterLogin />} />
        <Route path="/post/:postId" element={<DetailPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </>
  )
}

export default App
