import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Target, Users, TrendingUp, Shield, Camera, MapPin, Trophy, Star, ArrowRight, Zap } from 'lucide-react';

interface ChuppaRustamLandingProps {
  onJoinNetwork: () => void;
  onClose: () => void;
}

export function ChuppaRustamLanding({ onJoinNetwork, onClose }: ChuppaRustamLandingProps) {
  const [isUndercover, setIsUndercover] = useState(true);
  const [activeScouts, setActiveScouts] = useState(47);
  const [recentIntel, setRecentIntel] = useState(0);

  useEffect(() => {
    // Simulate live scout activity
    const interval = setInterval(() => {
      setActiveScouts(prev => prev + Math.floor(Math.random() * 3) - 1);
      setRecentIntel(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const missionStats = [
    { label: 'Active Scouts', value: activeScouts, icon: '🕵️', color: 'text-orange-400' },
    { label: 'Intel Reports Today', value: recentIntel + 127, icon: '📊', color: 'text-green-400' },
    { label: 'Markets Covered', value: 23, icon: '🏪', color: 'text-blue-400' },
    { label: 'Vendors Helped', value: 1240, icon: '🤝', color: 'text-purple-400' }
  ];

  const topScouts = [
    { name: 'market_sherlock', points: 4250, badge: '🏆', rank: 1 },
    { name: 'price_phantom', points: 3890, badge: '🥈', rank: 2 },
    { name: 'wholesale_warrior', points: 2650, badge: '🥉', rank: 3 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-red-500/30 shadow-2xl shadow-red-500/20">
        
        {/* Header with Spy Theme */}
        <div className="relative bg-gradient-to-r from-red-900/50 via-orange-900/50 to-yellow-900/50 p-8 rounded-t-xl overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-float-delayed"></div>
            <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-float-slow"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    <span className="gradient-text">Chuppa Rustam</span> Mode
                  </h1>
                  <p className="text-xl text-gray-300">Undercover Price Intelligence Network</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">NETWORK ACTIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-600">
                  <button
                    onClick={() => setIsUndercover(!isUndercover)}
                    className="flex items-center space-x-2"
                  >
                    {isUndercover ? (
                      <EyeOff className="h-4 w-4 text-green-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-white text-sm">
                      {isUndercover ? 'Undercover Mode' : 'Visible Mode'}
                    </span>
                  </button>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Mission Brief */}
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-red-400" />
                <h2 className="text-xl font-bold text-red-400">🎯 CLASSIFIED MISSION BRIEFING</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">The Problem</h3>
                  <p className="text-red-200 mb-4">
                    Street food vendors are being exploited with unfair prices because they lack market intelligence. 
                    Wholesale dealers hide real pricing, creating information asymmetry.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Your Mission</h3>
                  <p className="text-red-200 mb-4">
                    Go undercover in wholesale markets. Capture price evidence. Submit anonymous intel. 
                    Help fellow vendors get fair deals while earning points and climbing the leaderboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Mission Stats */}
        <div className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {missionStats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl font-bold ${stat.color} animate-counter`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🕵️ How The Intelligence Network Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center group hover:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Go Undercover</h3>
                <p className="text-gray-300 text-sm">
                  Visit wholesale markets as a regular customer. Browse casually, act natural. 
                  You're just another shopper - no one suspects you're gathering intel.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center group hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Capture Evidence</h3>
                <p className="text-gray-300 text-sm">
                  Discreetly photograph price boards, bills, or rate lists. Submit anonymous reports 
                  with location and pricing data. Your identity stays completely protected.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center group hover:border-green-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Help Vendors</h3>
                <p className="text-gray-300 text-sm">
                  Your intel gets verified and added to our real-time price map. Vendors use this 
                  data to negotiate better deals and avoid exploitation.
                </p>
              </div>
            </div>
          </div>

          {/* Top Scouts Leaderboard */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-white">Top Secret Agents</h3>
              </div>
              <div className="space-y-3">
                {topScouts.map(scout => (
                  <div key={scout.rank} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{scout.badge}</span>
                      <div>
                        <div className="font-semibold text-white">#{scout.rank} {scout.name}</div>
                        <div className="text-sm text-gray-400">Undercover Agent</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-400">{scout.points}</div>
                      <div className="text-xs text-gray-400">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
                <h3 className="text-xl font-bold text-white">Recent Intel</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className="text-white font-medium">Onions @ Azadpur</div>
                      <div className="text-sm text-gray-400">2 min ago</div>
                    </div>
                  </div>
                  <div className="text-orange-400 font-bold">₹22/kg</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <div>
                      <div className="text-white font-medium">Tomatoes @ INA</div>
                      <div className="text-sm text-gray-400">5 min ago</div>
                    </div>
                  </div>
                  <div className="text-blue-400 font-bold">₹35/kg</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <div>
                      <div className="text-white font-medium">Oil @ Sadar Bazaar</div>
                      <div className="text-sm text-gray-400">8 min ago</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">₹118/L</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rewards & Badges */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-purple-400">Earn Rewards & Badges</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🏅</div>
                <div className="text-white font-medium">Price Detective</div>
                <div className="text-sm text-gray-400">Submit 10 verified reports</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🦇</div>
                <div className="text-white font-medium">Market Spy</div>
                <div className="text-sm text-gray-400">Cover 5 different markets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-white font-medium">Truth Seeker</div>
                <div className="text-sm text-gray-400">Achieve 95% accuracy rate</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join the Revolution? 🕵️‍♂️
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                Become an undercover agent in the fight against price exploitation
              </p>
              <p className="text-gray-400">
                Your mission: Gather intel. Help vendors. Earn rewards. Stay anonymous.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onJoinNetwork}
                className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                <Eye className="h-6 w-6" />
                <span>Join Secret Network</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              <button
                onClick={onClose}
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              🔒 Your identity remains completely anonymous • 🛡️ All data is encrypted • 🤝 Help your community
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}