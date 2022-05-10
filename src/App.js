import { Routes, Route  } from "react-router-dom";
import WelcomePage from "./screens/WelcomePage/WelcomePage"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./screens/HomePage/HomePage"
import AuthProvider from "./components/context/authContext";
import NotFound from "./components/NotFound";
import constants from "./constants";
import ProtectedRouts from "./components/ProtectedRouts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path={constants.landingPageURL} element ={<WelcomePage/>}/>
          <Route path={constants.loginURL} element ={<Login/>}/>
          <Route path={constants.registerURL} element ={<Register/>}/>
          
          <Route element={<ProtectedRouts/>}>

            <Route path={constants.homePageURL} element={<HomePage/>}/>
          </Route>
          
          <Route path="*" element={<NotFound/>}/>



        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
