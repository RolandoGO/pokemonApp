import { Routes, Route  } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage/WelcomePage"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./screens/HomePage/HomePage"
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { AuthContextProvider } from "./components/context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element ={<WelcomePage/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element ={<Register/>}/>


        
            <Route  element={<ProtectedRoutes/>}>
              
                <Route path="/homePage" element={<HomePage/>}/>
              
            </Route>
        

          <Route path="*" element={<NotFound/>}/>



        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
