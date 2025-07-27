import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Users, TrendingUp, Star, MapPin, Clock } from 'lucide-react';
import { VoiceSearch } from './VoiceSearch';
import { ARQualityScanner } from './ARQualityScanner';
import { PriceHeatMap } from './PriceHeatMap';
import { BlockchainTrustScore } from './BlockchainTrustScore';
import { DemandForecast } from './DemandForecast';
import { OfflineManager } from './OfflineManager';
import { UPIPayment } from './UPIPayment';
import { WhatsAppIntegration } from './WhatsAppIntegration';
import { ChuppaRustamMode } from './ChuppaRustamMode';
import { ChuppaRustamLanding } from './ChuppaRustamLanding';

export function VendorDashboard() {
  const [activeTab, setActiveTab] = useState<'browse' | 'groups' | 'orders' | 'profile'>('browse');
  const [showQualityScanner, setShowQualityScanner] = useState(false);
  const [showChuppaRustam, setShowChuppaRustam] = useState(false);
  const [showChuppaRustamLanding, setShowChuppaRustamLanding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUPIPayment, setShowUPIPayment] = useState<{
    show: boolean;
    amount: number;
    orderId: string;
    supplierName: string;
  }>({ show: false, amount: 0, orderId: '', supplierName: '' });
  const [showWhatsApp, setShowWhatsApp] = useState<{
    show: boolean;
    supplierName: string;
    supplierPhone: string;
    orderId?: string;
  }>({ show: false, supplierName: '', supplierPhone: '' });

  const handleVoiceResult = (text: string) => {
    setSearchQuery(text);
    // Process voice command for supplier search
    console.log('Voice search:', text);
  };

  const handlePayment = (amount: number, orderId: string, supplierName: string) => {
    setShowUPIPayment({ show: true, amount, orderId, supplierName });
  };

  const handleWhatsAppChat = (supplierName: string, supplierPhone: string, orderId?: string) => {
    setShowWhatsApp({ show: true, supplierName, supplierPhone, orderId });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Vendor Dashboard</h1>
        <p className="text-gray-300">Welcome back, Rajesh! Find the best suppliers for your business.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 card-3d">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">This Month Savings</p>
              <p className="text-2xl font-bold text-green-600">₹4,250</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500 transform transition-transform duration-300 group-hover:rotate-12" />
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 card-3d">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Orders</p>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-blue-500 transform transition-transform duration-300 group-hover:rotate-12" />
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 card-3d">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Group Memberships</p>
              <p className="text-2xl font-bold text-orange-600">2</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 card-3d">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Trust Score</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-yellow-600">4.8</p>
                <Star className="h-5 w-5 text-yellow-400 fill-current ml-1 animate-bounce-gentle" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-700 mb-8">
        <nav className="flex space-x-8">
          {[
            { key: 'browse', label: 'Browse Suppliers', icon: Search },
            { key: 'groups', label: 'Group Buying', icon: Users },
            { key: 'orders', label: 'My Orders', icon: ShoppingCart },
            { key: 'profile', label: 'Profile', icon: Star }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === key
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'browse' && <BrowseSuppliers 
        onPayment={handlePayment} 
        onWhatsAppChat={handleWhatsAppChat} 
        setShowChuppaRustam={setShowChuppaRustam} 
        setShowQualityScanner={setShowQualityScanner}
        setShowChuppaRustamLanding={setShowChuppaRustamLanding}
      />}
      {activeTab === 'groups' && <GroupBuying />}
      {activeTab === 'orders' && <MyOrders />}
      {activeTab === 'profile' && <VendorProfile />}
      
      {showQualityScanner && (
        <ARQualityScanner onClose={() => setShowQualityScanner(false)} />
      )}

      {/* UPI Payment Modal */}
      {showUPIPayment.show && (
        <UPIPayment
          amount={showUPIPayment.amount}
          orderId={showUPIPayment.orderId}
          supplierName={showUPIPayment.supplierName}
          onPaymentSuccess={(transactionId) => {
            console.log('Payment successful:', transactionId);
            setShowUPIPayment({ show: false, amount: 0, orderId: '', supplierName: '' });
          }}
          onPaymentCancel={() => setShowUPIPayment({ show: false, amount: 0, orderId: '', supplierName: '' })}
        />
      )}

      {/* WhatsApp Integration Modal */}
      {showWhatsApp.show && (
        <WhatsAppIntegration
          supplierName={showWhatsApp.supplierName}
          supplierPhone={showWhatsApp.supplierPhone}
          orderId={showWhatsApp.orderId}
          onClose={() => setShowWhatsApp({ show: false, supplierName: '', supplierPhone: '' })}
        />
      )}

      {/* Chuppa Rustam Mode */}
      {showChuppaRustam && (
        <ChuppaRustamMode onClose={() => setShowChuppaRustam(false)} />
      )}

      {/* Chuppa Rustam Landing */}
      {showChuppaRustamLanding && (
        <ChuppaRustamLanding 
          onJoinNetwork={() => {
            setShowChuppaRustamLanding(false);
            setShowChuppaRustam(true);
          }}
          onClose={() => setShowChuppaRustamLanding(false)}
        />
      )}

      {/* Offline Manager */}
      <OfflineManager />
    </div>
  );
}

function BrowseSuppliers({ onPayment, onWhatsAppChat, setShowChuppaRustam, setShowQualityScanner, setShowChuppaRustamLanding }: { 
  onPayment: (amount: number, orderId: string, supplierName: string) => void;
  onWhatsAppChat: (supplierName: string, supplierPhone: string, orderId?: string) => void;
  setShowChuppaRustam: (show: boolean) => void;
  setShowQualityScanner: (show: boolean) => void;
  setShowChuppaRustamLanding: (show: boolean) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleVoiceResult = (text: string) => {
    setSearchQuery(text);
    // Process voice command for supplier search
    console.log('Voice search:', text);
  };

  const suppliers = [
    {
      id: 1,
      name: "Fresh Vegetables Delhi",
      rating: 4.8,
      location: "Azadpur Mandi, Delhi",
      products: ["Onions", "Tomatoes", "Potatoes", "Ginger"],
      minOrder: 500,
      delivery: "Same day",
      verified: true,
      price: "₹25/kg",
      phone: "+91-9876543210"
    },
    {
      id: 2,
      name: "Spice Masters",
      rating: 4.6,
      location: "Khari Baoli, Delhi",
      products: ["Turmeric", "Red Chili", "Coriander", "Cumin"],
      minOrder: 1000,
      delivery: "Next day",
      verified: true,
      price: "₹180/kg",
      phone: "+91-9876543211"
    },
    {
      id: 3,
      name: "Oil & Ghee Suppliers",
      rating: 4.9,
      location: "Punjabi Bagh, Delhi",
      products: ["Cooking Oil", "Ghee", "Vanaspati"],
      minOrder: 2000,
      delivery: "2-3 days",
      verified: true,
      price: "₹120/L",
      phone: "+91-9876543212"
    }
  ];

  return (
    <div>
      {/* Revolutionary Price Heat Map */}
      <div className="mb-8">
        <PriceHeatMap />
      </div>
      
      {/* AI Demand Forecasting */}
      <div className="mb-8">
        <DemandForecast />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suppliers, products..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <VoiceSearch onVoiceResult={handleVoiceResult} />
            </div>
          </div>
        </div>
        <button 
          onClick={() => setShowQualityScanner(true)}
          className="flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <span>🔍</span>
          <span>Quality Scanner</span>
        </button>
        <button 
          onClick={() => setShowChuppaRustamLanding(true)}
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
        >
          <span>🕵️</span>
          <span>Chuppa Rustam</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </button>
        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid gap-6">
        {suppliers.map(supplier => (
          <div key={supplier.id} className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold text-white">{supplier.name}</h3>
                  {supplier.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                  )}
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{supplier.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{supplier.delivery}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">{supplier.price}</div>
                <div className="text-sm text-gray-400">Starting from</div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Products:</p>
              <div className="flex flex-wrap gap-2">
                {supplier.products.map(product => (
                  <span key={product} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Min. order: ₹{supplier.minOrder}
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => onWhatsAppChat(supplier.name, supplier.phone)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>💬</span>
                  <span>Chat</span>
                </button>
                <button 
                  onClick={() => onPayment(supplier.minOrder, `ORD${Date.now()}`, supplier.name)}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-bold relative overflow-hidden group"
                >
                  <span>Order Now</span>
                </button>
                <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-900/20">
                  Contact Supplier
                </button>
              </div>
            </div>
            
            {/* Blockchain Trust Score for Premium Suppliers */}
            {supplier.verified && supplier.rating > 4.7 && (
              <div className="mt-4 pt-4 border-t border-gray-600">
                <BlockchainTrustScore
                  supplierName={supplier.name}
                  trustScore={Math.floor(supplier.rating * 20)}
                  totalTransactions={Math.floor(Math.random() * 500) + 100}
                  verificationLevel={supplier.rating > 4.8 ? 'Gold' : 'Premium'}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupBuying() {
  const groups = [
    {
      id: 1,
      name: "Delhi Street Food Alliance",
      members: 24,
      currentOrder: "Mixed Vegetables",
      targetAmount: 50000,
      currentAmount: 35000,
      deadline: "2 days left",
      discount: "15% off"
    },
    {
      id: 2,
      name: "Spice Buyers Collective",
      members: 18,
      currentOrder: "Bulk Spices",
      targetAmount: 30000,
      currentAmount: 28500,
      deadline: "5 hours left",
      discount: "20% off"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-semibold">
          Create New Group
        </button>
      </div>

      <div className="grid gap-6">
        {groups.map(group => (
          <div key={group.id} className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{group.name}</h3>
                <p className="text-gray-400">{group.members} members • {group.currentOrder}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {group.discount}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{group.deadline}</span>
              </div>
              <div className="bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${(group.currentAmount / group.targetAmount) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1 text-gray-400">
                <span>₹{group.currentAmount.toLocaleString()}</span>
                <span>₹{group.targetAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-900/20">
                View Details
              </button>
              <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyOrders() {
  const orders = [
    {
      id: "ORD001",
      supplier: "Fresh Vegetables Delhi",
      items: ["Onions 10kg", "Tomatoes 5kg", "Potatoes 8kg"],
      amount: 1250,
      status: "Delivered",
      date: "2024-01-15",
      rating: 5
    },
    {
      id: "ORD002", 
      supplier: "Spice Masters",
      items: ["Turmeric 2kg", "Red Chili 1kg"],
      amount: 680,
      status: "In Transit",
      date: "2024-01-18",
      rating: null
    },
    {
      id: "ORD003",
      supplier: "Oil & Ghee Suppliers", 
      items: ["Cooking Oil 5L", "Ghee 2kg"],
      amount: 950,
      status: "Processing",
      date: "2024-01-20",
      rating: null
    }
  ];

  return (
    <div className="space-y-6">
      {orders.map(order => (
        <div key={order.id} className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Order #{order.id}</h3>
              <p className="text-gray-300">{order.supplier}</p>
              <p className="text-sm text-gray-400">{order.date}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-white">₹{order.amount}</div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Items:</p>
            <div className="space-y-1">
              {order.items.map(item => (
                <div key={item} className="text-sm text-gray-300">• {item}</div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {order.rating && (
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-400">Your rating:</span>
                  {[...Array(order.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              )}
            </div>
            <div className="flex space-x-3">
              {order.status === 'Delivered' && !order.rating && (
                <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-900/20">
                  Rate Order
                </button>
              )}
              <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">
                Track Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VendorProfile() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Vendor Profile</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
              <input 
                type="text" 
                value="Sharma Chaat Corner"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Owner Name</label>
              <input 
                type="text" 
                value="Rajesh Kumar Sharma"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
              <input 
                type="text" 
                value="Connaught Place, New Delhi"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input 
                type="tel" 
                value="+91 98765 43210"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Trust & Verification</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg">
              <div>
                <div className="font-medium text-green-400">Phone Verified</div>
                <div className="text-sm text-green-300">+91 98765 43210</div>
              </div>
              <div className="text-green-400">✓</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg">
              <div>
                <div className="font-medium text-green-400">Business License</div>
                <div className="text-sm text-green-300">DL/BL/2024/12345</div>
              </div>
              <div className="text-green-400">✓</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg">
              <div>
                <div className="font-medium text-yellow-400">Bank Account</div>
                <div className="text-sm text-yellow-300">Add for faster payments</div>
              </div>
              <button className="text-orange-400 hover:text-orange-300">Add</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 font-semibold">
          Update Profile
        </button>
      </div>
    </div>
  );
}