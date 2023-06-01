import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element = {<SignUp/>}></Route>
      <Route path='home' element = {<Home/>}></Route>
      <Route path='login' element = {<Login/>}></Route>
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
