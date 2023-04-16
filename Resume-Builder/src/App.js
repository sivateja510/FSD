import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Foot from './components/Foot';
import CreateResume from './components/createresume';
function App() {
  return (
    <>
    <BrowserRouter>
    <Head/>

    <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/CreateResume' element={<CreateResume/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
    </>
  );
}

export default App;
