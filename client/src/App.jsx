import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './stylesheets/alignments.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/theme.css';
import './stylesheets/custom.css';

function App() {
  

  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path= '/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element ={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
 
    </>
  )
}

export default App
