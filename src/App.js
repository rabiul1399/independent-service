import './App.css';
import Header from './Pages/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
