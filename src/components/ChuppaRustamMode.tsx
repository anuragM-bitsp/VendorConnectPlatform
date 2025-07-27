import React, { useState, useRef } from 'react';
import { Camera, Eye, EyeOff, MapPin, Upload, Star, Trophy, Target, Users, TrendingUp, X, CheckCircle } from 'lucide-react';

interface PriceSubmission {
  id: string;
  item: string;
  price: number;
  unit: string;
  location: string;
  timestamp: number;
  photo?: string;
  verified: boolean;
  submitterId: string;
  confidence: number;
}

interface ChuppaRustamModeProps {
  onClose: () => void;
}

export function ChuppaRustamMode({ onClose }: ChuppaRustamModeProps) {
  const [activeTab, setActiveTab] = useState<'submit' | 'scout' | 'leaderboard'>('submit');
  const [isUndercover, setIsUndercover] = useState(true);
  const [submissionData, setSubmissionData] = useState({
    item: '',
    price: '',
    unit: 'kg',
    location: '',
    photo: null as File | null
  });
  const [submissions] = useState<PriceSubmission[]>([
    {
      id: '1',
      item: 'Onions',
      price: 22,
      unit: 'kg',
      location: 'Azadpur Mandi',
      timestamp: Date.now() - 300000,
      verified: true,
      submitterId: 'scout_007',
      confidence: 95
    },
    {
      id: '2',
      item: 'Tomatoes',
      price: 35,
      unit: 'kg',
      location: 'INA Market',
      timestamp: Date.now() - 600000,
      verified: true,
      submitterId: 'price_ninja',
      confidence: 88
    }
  ]);
  const [userStats] = useState({
    submissions: 47,
    verified: 42,
    rank: 3,
    points: 2840,
    badges: ['Price Detective', 'Market Spy', 'Truth Seeker']
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoCapture = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSubmissionData({ ...submissionData, photo: file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Price submission:', submissionData);
    // Reset form
    setSubmissionData({ item: '', price: '', unit: 'kg', location: '', photo: null });
    // Show success message
    alert('🕵️ Price intel submitted successfully! +50 points earned');
  };

  const leaderboard = [
    { rank: 1, name: 'market_sherlock', points: 4250, submissions: 89, badge: '🏆' },
    { rank: 2, name: 'price_phantom', points: 3890, submissions: 76, badge: '🥈' },
    { rank: 3, name: 'You (undercover_ace)', points: 2840, submissions: 47, badge: '🥉' },
    { rank: 4, name: 'wholesale_warrior', points: 2650, submissions: 52, badge: '🎯' },
    { rank: 5, name: 'bazaar_batman', points: 2340, submissions: 41, badge: '🦇' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Eye className="h-8 w-8 text-orange-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Chuppa Rustam Mode</h2>
                <p className="text-gray-300 text-sm">Undercover Price Intelligence Network</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-lg">
                <button
                  onClick={() => setIsUndercover(!isUndercover)}
                  className="flex items-center space-x-1"
                >
                  {isUndercover ? (
                    <EyeOff className="h-4 w-4 text-green-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-white text-sm">
                    {isUndercover ? 'Undercover' : 'Visible'}
                  </span>
                </button>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-300">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border border-orange-500/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">{userStats.submissions}</div>
              <div className="text-xs text-orange-300">Intel Reports</div>
            </div>
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">{userStats.verified}</div>
              <div className="text-xs text-green-300">Verified</div>
            </div>
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">#{userStats.rank}</div>
              <div className="text-xs text-blue-300">Rank</div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-400">{userStats.points}</div>
              <div className="text-xs text-purple-300">Points</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 mb-6">
            {[
              { key: 'submit', label: 'Submit Intel', icon: Camera },
              { key: 'scout', label: 'Scout Network', icon: Users },
              { key: 'leaderboard', label: 'Leaderboard', icon: Trophy }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'submit' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-red-400" />
                  <span className="font-medium text-red-400">Mission Briefing</span>
                </div>
                <p className="text-red-300 text-sm">
                  Go undercover in wholesale markets. Capture price evidence. Help fellow vendors get fair deals. 
                  Your identity remains secret - you're just another customer browsing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Item/Ingredient
                    </label>
                    <input
                      type="text"
                      required
                      value={submissionData.item}
                      onChange={(e) => setSubmissionData({ ...submissionData, item: e.target.value })}
                      placeholder="e.g., Onions, Tomatoes, Oil"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Location (Market)
                    </label>
                    <input
                      type="text"
                      required
                      value={submissionData.location}
                      onChange={(e) => setSubmissionData({ ...submissionData, location: e.target.value })}
                      placeholder="e.g., Azadpur Mandi"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      required
                      value={submissionData.price}
                      onChange={(e) => setSubmissionData({ ...submissionData, price: e.target.value })}
                      placeholder="25"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Unit
                    </label>
                    <select
                      value={submissionData.unit}
                      onChange={(e) => setSubmissionData({ ...submissionData, unit: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="kg">per kg</option>
                      <option value="L">per liter</option>
                      <option value="piece">per piece</option>
                      <option value="dozen">per dozen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Evidence Photo (Optional)
                  </label>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handlePhotoCapture}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600"
                    >
                      <Camera className="h-4 w-4" />
                      <span>Capture Evidence</span>
                    </button>
                    {submissionData.photo && (
                      <div className="flex items-center space-x-2 text-green-400">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Photo captured</span>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                >
                  <Upload className="h-5 w-5" />
                  <span>Submit Intel (+50 Points)</span>
                </button>
              </form>
            </div>
          )}

          {activeTab === 'scout' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">Recent Intel Reports</h3>
                <div className="text-sm text-gray-400">Live updates from the field</div>
              </div>

              {submissions.map(submission => (
                <div key={submission.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-white">{submission.item}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{submission.location}</span>
                        </div>
                        <span>by {submission.submitterId}</span>
                        <span>{Math.floor((Date.now() - submission.timestamp) / 60000)}m ago</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-400">
                        ₹{submission.price}/{submission.unit}
                      </div>
                      <div className="flex items-center space-x-1">
                        {submission.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        <span className="text-sm text-gray-400">
                          {submission.confidence}% confidence
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-xs">
                        Verified
                      </span>
                      <span className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full text-xs">
                        High Confidence
                      </span>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Top Price Scouts</h3>
                <p className="text-gray-400">Heroes fighting price exploitation</p>
              </div>

              {leaderboard.map(scout => (
                <div
                  key={scout.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    scout.rank === 3
                      ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-500/50'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{scout.badge}</div>
                    <div>
                      <div className="font-semibold text-white">
                        #{scout.rank} {scout.name}
                        {scout.rank === 3 && <span className="text-orange-400 ml-2">(You)</span>}
                      </div>
                      <div className="text-sm text-gray-400">
                        {scout.submissions} intel reports submitted
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{scout.points}</div>
                    <div className="text-sm text-gray-400">points</div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-purple-400" />
                  <span className="font-medium text-purple-400">Your Badges</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userStats.badges.map(badge => (
                    <span key={badge} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                      🏅 {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}