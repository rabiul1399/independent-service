import './App.css';
import Header from './Pages/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Detailes from './Pages/Home/Customer/Detailes/Detailes';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details' element={<Detailes></Detailes>}></Route>
       
       


      </Routes>


    </div>
  );
}

export default App;
