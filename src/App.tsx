import './App.css'
import { LoginPage } from './pages/LoginPage'
import { ShoppingListPage } from './pages/ShoppingListPage'
import { useState } from 'react';

function App() {

 const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App flex-1 w-full h-full">
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <ShoppingListPage onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App
