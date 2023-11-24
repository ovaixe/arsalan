export default function Navbar({handleLogin, handleSignUp, handleAdminDashboard, handleUserDashboard, currentComponent}) {
  return (
    <div className="bg-blue-500 flex items-center p-5 justify-center space-x-5">
        <button
        onClick={handleUserDashboard}
        className={`${currentComponent === 'UserDashboard' ? 'bg-green-300' : 'bg-blue-400'} text-lg p-2 rounded-lg`}
      >
        User Dashboard
      </button>
      <button
        onClick={handleAdminDashboard}
        className={`${currentComponent === 'AdminDashboard' ? 'bg-green-300' : 'bg-blue-400'} text-lg p-2 rounded-lg`}
      >
        Admin Dashboard
      </button>
      <button
        onClick={handleLogin}
        className={`${currentComponent === 'Login' ? 'bg-green-300' : 'bg-blue-400'} text-lg p-2 rounded-lg`}
      >
        Login
      </button>
      <button
        onClick={handleSignUp}
        className={`${currentComponent === 'SignUp' ? 'bg-green-300' : 'bg-blue-400'} text-lg p-2 rounded-lg`}
      >
        Sign Up
      </button>
    </div>
  );
}
