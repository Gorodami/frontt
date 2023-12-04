import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <div className="App">
    <BrowserRouter>

    <Routes>
      <Route path='/' element={ <Home />}/>
      
    </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App;
