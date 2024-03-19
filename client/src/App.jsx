



import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CoinModal from './CoinModal';
import AppNavbar from './AppNavbar';
import Home from './Home';
import UserRegistrationComponent from './Register';
import UserLoginComponent from './Login';
import FooterComponent from './FooterComponent';
import My from './My';
import MyCard from './MyCard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      <AppNavbar isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn state to AppNavbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coinmodal" element={<CoinModal />} />
        <Route path="/register" element={<UserRegistrationComponent />} />
        <Route path="/login" element={<UserLoginComponent onLogin={handleLogin} />} /> {/* Pass onLogin function */}
        <Route path="/my" element={<My />} />
        <Route path="/mycard" element={<MyCard />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;

