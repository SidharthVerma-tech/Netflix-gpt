import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Browse from './components/Browse';
import Body from './components/Body';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
      </Routes>        
    </Router>
   
  );
}

export default App;
