import './App.css';
import Header from './Pages/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import CustomerReview from './Pages/Reviews/CustomerReview/CustomerReview';
import Details from './Pages/Reviews/Detailes/Details';
import Register from './Pages/Forms/Register/Register';
import Login from './Pages/Forms/Login/Login';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

       <Route path='*' element={<NotFound></NotFound>}></Route>
       


      </Routes>


    </div>
  );
}

export default App;
