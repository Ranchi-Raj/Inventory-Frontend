// import logo from './logo.svg';
import './App.css';
// import Login from './components/loginAndSignUp';
import HomePage from './students/homepage';
import {Route, Routes} from "react-router-dom";
import ItemDesc from './students/ItemDescription';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/itemDesc' element={<ItemDesc/>}/>
      </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
