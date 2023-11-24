import { useState } from "react";
import Navbar from "./components/user/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AdminDashboard from "./components/user/AdminDashboard";
import UserDashboard from "./components/user/UserDashboard";
import Unauthorized from "./components/auth/Unauthorized";
import { validateUser, validateAdmin } from "./services/auth.service";

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [unauthorizedMessage, setUnauthorizedMessage] = useState("");

  const handleLogin = () => {
    setCurrentComponent("Login");
  };

  const handleSignUp = () => {
    setCurrentComponent("SignUp");
  };

  const handleAdminDashboard = async () => {
    if (await validateUser()) {
      if (await validateAdmin()) setCurrentComponent("AdminDashboard");
      else {
        setUnauthorizedMessage("Unauthorized Access!");
        setCurrentComponent("Unauthorized");
      }
    } else setCurrentComponent("Unauthorized");
  };

  const handleUserDashboard = async () => {
    if (await validateUser()) setCurrentComponent("UserDashboard");
    else {
      setUnauthorizedMessage("Please login to access!");
      setCurrentComponent("Unauthorized");
    }
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
        {currentComponent === "AdminDashboard" ? <AdminDashboard /> : <></>}
        {currentComponent === "UserDashboard" ? <UserDashboard /> : <></>}
        {currentComponent === "Unauthorized" ? (
          <Unauthorized message={unauthorizedMessage} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
