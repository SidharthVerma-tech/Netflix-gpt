import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Browse from './components/Browse';
import Body from './components/Body';
import Login from './components/Login';
import appStore from './utils/appStore';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={appStore}>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
      </Routes>        
    </Router>
    </Provider>
   
  );
}

export default App;
