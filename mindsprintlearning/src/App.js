
import './App.css';
import Login from './component/Login';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ContextProvider from './component/ContextHook/ContextProvider';
import MyCourses from './component/Pages/MyCourses';
import CarouselComponent from './component/CarouselComponent';
import Dashboard from './component/Pages/Dashboard';
import CourseDt from './component/Pages/CourseDt';
import AdminMainPage from './component/adminPage/AdminMainPage';
import CourseManagement from './component/adminPage/CourseManagement';
import UserManagement from './component/adminPage/UserManagement';
import Footer from './component/Footer';
import { useState } from 'react';
import StartCourse from './component/Pages/StartCourse';
import GenerateCertificate from './component/Pages/GenerateCertificate';

function App() {
  const [loggedIn,setLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  return (
    <ContextProvider>
      <BrowserRouter>
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    <div style={{paddingBottom:'80px'}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<CarouselComponent/>}/>
        <Route path='/admin' element={<AdminMainPage/>}/>
        <Route path='/courses/:id' element={<CourseDt/>}/>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/my-courses' element={<MyCourses/>}/>
        <Route path='/admin/courses' element={<CourseManagement/>}/>
        <Route path='/admin/users' element={<UserManagement/>}/>
        <Route path='/start-course/:id' element={<StartCourse/>}/>
        <Route path='/generate-certificate/:id' element={<GenerateCertificate/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
