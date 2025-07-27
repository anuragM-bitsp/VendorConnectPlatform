import React, { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { VendorDashboard } from './components/VendorDashboard';
import { SupplierDashboard } from './components/SupplierDashboard';
import { AuthModal } from './components/AuthModal';

export type UserRole = 'vendor' | 'supplier' | null;

function App() {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleLogin = (role: UserRole) => {
    setCurrentUser(role);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header 
        currentUser={currentUser}
        onLogin={openAuth}
        onLogout={handleLogout}
      />
      
      {!currentUser && (
        <LandingPage onGetStarted={() => openAuth('signup')} />
      )}
      
      {currentUser === 'vendor' && <VendorDashboard />}
      {currentUser === 'supplier' && <SupplierDashboard />}
      
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;