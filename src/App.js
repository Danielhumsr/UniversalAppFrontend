import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './LogIn/Pages/RegisterPage'
import { LogProvaider } from "./LogIn/Utils/LoginContext";
import LogInpage from "./LogIn/Pages/LogInpage";
import SesionValidation from "./LogIn/Pages/SesionValidation";
import HomePage from "./Global/Pages/HomePage";
import ModulesMenu from "./Global/Pages/ModulesMenu";
function App() {
  return (
    <LogProvaider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/LogIn" element={<LogInpage/>}></Route>
          <Route path="/SingUp" element={<RegisterPage />}></Route>
          <Route element= {<SesionValidation/>}>
            <Route path="/ListUser" element={<h1>ListUser</h1>}></Route>
            <Route path="/ModuleMenu" element={<ModulesMenu/>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </LogProvaider>

  );
}

export default App;
