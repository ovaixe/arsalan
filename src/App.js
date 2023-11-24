import { useState } from "react";
import Navbar from "./components/user/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AdminDashboard from "./components/user/AdminDashboard";
import UserDashboard from "./components/user/UserDashboard";

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleLogin = () => {
    setCurrentComponent("Login");
  };

  const handleSignUp = () => {
    setCurrentComponent("SignUp");
  };

  const handleAdminDashboard = () => {
    setCurrentComponent("AdminDashboard");
  };

  const handleUserDashboard = () => {
    setCurrentComponent("UserDashboard");
  };

  return (
    <div>
      <Navbar
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        handleAdminDashboard={handleAdminDashboard}
        handleUserDashboard={handleUserDashboard}
        currentComponent={currentComponent}
      />
      <div className="px-20 py-10">
        {currentComponent === "Login" ? <Login /> : <></>}
        {currentComponent === "SignUp" ? <SignUp /> : <></>}
        {currentComponent ==='AdminDashboard' ? <AdminDashboard /> : <></>}
        {currentComponent ==='UserDashboard' ? <UserDashboard /> : <></>}
      </div>
    </div>
  );
}

export default App;
