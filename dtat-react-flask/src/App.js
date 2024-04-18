import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainwelcome from "./components/mainWelcome";
import Login from "./components/login";
import AdminWelcome from "./components/adminWelcome";
import SignUp from "./components/signUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainwelcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/adminWelcome" element={<AdminWelcome />}></Route>
          <Route path="/adminWelcome" element={<AdminWelcome />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
