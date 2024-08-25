// import logo from './logo.svg';
import './App.css';
 import Login from './components/loginAndSignUp';
import HomePage from './students/homepage';
import {Route, Routes} from "react-router-dom";
import ItemDesc from './students/ItemDescription';
import Profile from './students/profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/itemDesc' element={<ItemDesc/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
