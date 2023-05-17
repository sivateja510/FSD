import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Head from './components/Head';
import {Home} from './components/Home';
import { Database } from './components/Database';
import Profile from './components/Profile';
// import { Login } from './components/Login';
import { Calander } from './components/Calander';
import { Mydiary } from './components/Mydiary';

import Foot from './Foot';
import Login1 from './Login1';
import Register from './Register';
function App() {
  // console.log(props.employeeID);
  return (
    <>
    <BrowserRouter>
    <Head/>

    <Routes>
      {/* <Route path='/' element={<Home  />}/> */}
      <Route path='/Profile' element={<Profile />}/>
      <Route path='/' element={<Login1 />}/>
      <Route path='/home' element={ <Home />}/>
      <Route path='/Database' element={<Database />}/>
      {/* <Route path='/Login' element={<Login/>}/> */}
      <Route path='/Calander' element={<Calander />}/>
      <Route path='/Mydiary' element={<Mydiary />}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>

    {/* <nav id="nav" > 
        <li>Faculty Portal</li>
        <ul>
          <li>Home</li>
          <li>Mydairy</li>
          <li>Profile</li>
          <li>calander</li>
          <li>Database</li>
          <li>Login</li>
          </ul>
    </nav> */}
    </>
    
  );
}

export default App;
