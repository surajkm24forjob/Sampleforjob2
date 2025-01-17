import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Userform from '../src/frontend/Userform';
import Admin from './frontend/adminlogin.jsx';


function App() {


  return (
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Userform/>}/>
  <Route exact path='/admin' element={<Admin/>}/>
</Routes>
</BrowserRouter> 
  )
}

export default App
