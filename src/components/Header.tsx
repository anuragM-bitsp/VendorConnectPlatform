import React from 'react';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { UserRole } from '../App';

interface HeaderProps {
  currentUser: UserRole;
  onLogin: (mode: 'login' | 'signup') => void;
  onLogout: () => void;
}

export function Header({ currentUser, onLogin, onLogout }: HeaderProps) {
  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingCart className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-white">VendorConnect</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            {!currentUser ? (
              <>
                <button
                  onClick={() => onLogin('login')}
                  className="text-gray-300 hover:text-orange-400 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => onLogin('signup')}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Get Started
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300 capitalize">{currentUser} Dashboard</span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}