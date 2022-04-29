import { Routes, Route  } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage/WelcomePage"
import Login from "./screens/Login/Login";
import HomePage from "./screens/HomePage/HomePage"
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element ={<WelcomePage/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/HomePage" element ={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>



      </Routes>
    </div>
  );
}

export default App;
