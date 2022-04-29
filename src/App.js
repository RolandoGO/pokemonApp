import { Routes, Route  } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage/WelcomePage"
import Login from "./screens/Login/Login";
import HomePage from "./screens/HomePage/HomePage"
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element ={<WelcomePage/>}/>
        <Route path="/login" element ={<Login/>}/>

        <Route  element={<ProtectedRoutes/>}>
          <Route path="/homepage" element={<HomePage/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>



      </Routes>
    </div>
  );
}

export default App;
