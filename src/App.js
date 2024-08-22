import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>


    <BrowserRouter>
    <Routes>
<Route  path='/signin' element={SignInComponent}></Route>
<Route  ></Route>
<Route ></Route>

    </Routes>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
