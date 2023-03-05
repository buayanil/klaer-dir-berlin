import { useState } from "react";

const Logout = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    // Your logout logic here
    setLoggedIn(false);
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

  
  