import './App.css';
import Header from './Pages/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Forms/Register/Register';
import Login from './Pages/Forms/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blogs from './Pages/Home/Blogs/Blogs';
import AboutMe from './Pages/Reviews/AboutMe/AboutMe';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
