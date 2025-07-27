import React from 'react';
import { Shield, CheckCircle, Clock, Star } from 'lucide-react';

interface BlockchainTrustScoreProps {
  supplierName: string;
  trustScore: number;
  totalTransactions: number;
  verificationLevel: 'Basic' | 'Premium' | 'Gold';
}

export function BlockchainTrustScore({ 
  supplierName, 
  trustScore, 
  totalTransactions, 
  verificationLevel 
}: BlockchainTrustScoreProps) {
  const getVerificationColor = (level: string) => {
    switch (level) {
      case 'Gold': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'Premium': return 'text-purple-400 bg-purple-900/20 border-purple-500/30';
      default: return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
    }
  };

  const getVerificationIcon = (level: string) => {
    switch (level) {
      case 'Gold': return '🏆';
      case 'Premium': return '💎';
      default: return '✓';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Shield className="h-5 w-5 mr-2 text-green-500" />
          Blockchain Trust Score
        </h3>
        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getVerificationColor(verificationLevel)}`}>
          {getVerificationIcon(verificationLevel)} {verificationLevel}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Trust Score</span>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(trustScore / 20) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-600'
                  }`} 
                />
              ))}
            </div>
            <span className="text-white font-semibold">{trustScore}/100</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Verified Transactions</span>
          <span className="text-green-400 font-semibold">{totalTransactions}</span>
        </div>

        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-400">Latest Verification</span>
          </div>
          <div className="text-xs text-gray-400">
            Quality audit completed 2 hours ago
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-blue-400">Smart Contract Status</span>
          </div>
          <div className="text-xs text-gray-400">
            Auto-payment enabled • Escrow active
          </div>
        </div>

        <div className="pt-3 border-t border-gray-600">
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
            View Blockchain History
          </button>
        </div>
      </div>
    </div>
  );
}