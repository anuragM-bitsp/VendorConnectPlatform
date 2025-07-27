import React, { useState } from 'react';
import { 
  Package, TrendingUp, Users, Star, Plus, Edit, Eye, MessageCircle, 
  BarChart3, Settings, Bell, Calendar, Target, Zap, Globe, 
  ShoppingBag, CreditCard, Truck, AlertCircle, CheckCircle,
  Filter, Search, Download, Upload, RefreshCw, Phone, Mail,
  Camera, MapPin, Clock, DollarSign, Percent, Award, Share2
} from 'lucide-react';

export function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'analytics' | 'customers' | 'marketing' | 'settings'>('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Supplier Command Center</h1>
            <p className="text-gray-300">Welcome back, Fresh Vegetables Delhi! Manage your business operations.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Dashboard */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-green-400">₹45,250</p>
              <p className="text-green-300 text-sm">+18.5% from last month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Orders</p>
              <p className="text-2xl font-bold text-blue-400">12</p>
              <p className="text-blue-300 text-sm">3 urgent deliveries</p>
            </div>
            <Package className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Customer Satisfaction</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-orange-400">4.8</p>
                <Star className="h-5 w-5 text-yellow-400 fill-current ml-1" />
              </div>
              <p className="text-orange-300 text-sm">156 reviews this month</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Inventory Health</p>
              <p className="text-2xl font-bold text-purple-400">92%</p>
              <p className="text-purple-300 text-sm">5 items low stock</p>
            </div>
            <AlertCircle className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-700 mb-8">
        <nav className="flex space-x-8">
          {[
            { key: 'overview', label: 'Overview', icon: BarChart3 },
            { key: 'products', label: 'Products', icon: Package },
            { key: 'orders', label: 'Orders', icon: ShoppingBag },
            { key: 'analytics', label: 'Analytics', icon: TrendingUp },
            { key: 'customers', label: 'Customers', icon: Users },
            { key: 'marketing', label: 'Marketing', icon: Target },
            { key: 'settings', label: 'Settings', icon: Settings }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === key
                  ? 'border-orange-500 text-orange-400'
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
      {activeTab === 'overview' && <OverviewDashboard />}
      {activeTab === 'products' && <ProductManagement />}
      {activeTab === 'orders' && <OrderManagement />}
      {activeTab === 'analytics' && <AnalyticsDashboard />}
      {activeTab === 'customers' && <CustomerManagement />}
      {activeTab === 'marketing' && <MarketingTools />}
      {activeTab === 'settings' && <SupplierSettings />}
    </div>
  );
}

function OverviewDashboard() {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Recent Activity */}
      <div className="lg:col-span-2">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'order', message: 'New order from Sharma Chaat Corner', time: '2 min ago', status: 'new' },
              { type: 'review', message: 'New 5-star review received', time: '15 min ago', status: 'positive' },
              { type: 'inventory', message: 'Onions stock running low (50kg left)', time: '1 hour ago', status: 'warning' },
              { type: 'payment', message: 'Payment received ₹2,450', time: '2 hours ago', status: 'success' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  activity.status === 'new' ? 'bg-blue-500' :
                  activity.status === 'positive' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.message}</p>
                  <p className="text-gray-400 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Plus, label: 'Add Product', color: 'bg-green-600 hover:bg-green-700' },
              { icon: Upload, label: 'Bulk Upload', color: 'bg-blue-600 hover:bg-blue-700' },
              { icon: Truck, label: 'Update Delivery', color: 'bg-orange-600 hover:bg-orange-700' },
              { icon: MessageCircle, label: 'Contact Support', color: 'bg-purple-600 hover:bg-purple-700' }
            ].map((action, index) => (
              <button key={index} className={`${action.color} text-white p-4 rounded-lg transition-colors flex flex-col items-center space-y-2`}>
                <action.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Performance Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Order Fulfillment Rate</span>
                <span className="text-green-400">96%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">On-time Delivery</span>
                <span className="text-blue-400">94%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Customer Satisfaction</span>
                <span className="text-orange-400">4.8/5</span>
              </div>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Fresh Onions', sales: '₹12,500', growth: '+15%' },
              { name: 'Red Tomatoes', sales: '₹9,800', growth: '+8%' },
              { name: 'Potatoes', sales: '₹8,200', growth: '+12%' }
            ].map((product, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-white text-sm font-medium">{product.name}</p>
                  <p className="text-gray-400 text-xs">{product.sales}</p>
                </div>
                <span className="text-green-400 text-sm">{product.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductManagement() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Fresh Onions",
      category: "Vegetables",
      price: 25,
      unit: "kg",
      stock: 500,
      minOrder: 10,
      status: "Active",
      image: "🧅",
      sales: 245,
      rating: 4.8,
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "Red Tomatoes",
      category: "Vegetables", 
      price: 30,
      unit: "kg",
      stock: 300,
      minOrder: 5,
      status: "Active",
      image: "🍅",
      sales: 189,
      rating: 4.6,
      lastUpdated: "1 day ago"
    },
    {
      id: 3,
      name: "Potatoes",
      category: "Vegetables",
      price: 20,
      unit: "kg", 
      stock: 50,
      minOrder: 15,
      status: "Low Stock",
      image: "🥔",
      sales: 156,
      rating: 4.7,
      lastUpdated: "3 hours ago"
    }
  ];

  return (
    <div>
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Product Catalog</h2>
          <p className="text-gray-400">Manage your inventory and product listings</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Bulk Import</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Categories</option>
            <option value="vegetables">Vegetables</option>
            <option value="spices">Spices</option>
            <option value="oils">Oils & Ghee</option>
          </select>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              <Package className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Sales</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{product.image}</div>
                      <div>
                        <div className="font-medium text-white">{product.name}</div>
                        <div className="text-sm text-gray-400">Updated {product.lastUpdated}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-white">₹{product.price}/{product.unit}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${
                      product.stock < 100 ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {product.stock} {product.unit}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{product.sales} orders</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{product.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Active' ? 'bg-green-900/30 text-green-400' :
                      'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-300">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-orange-400 hover:text-orange-300">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrderManagement() {
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: "ORD001",
      vendor: "Sharma Chaat Corner",
      vendorPhone: "+91-9876543210",
      items: ["Onions 10kg", "Tomatoes 5kg"],
      amount: 450,
      status: "Confirmed",
      priority: "Normal",
      date: "2024-01-20",
      deliveryDate: "2024-01-22",
      paymentStatus: "Paid"
    },
    {
      id: "ORD002",
      vendor: "Delhi Street Foods",
      vendorPhone: "+91-9876543211",
      items: ["Potatoes 20kg", "Onions 15kg"],
      amount: 775,
      status: "Processing",
      priority: "High",
      date: "2024-01-20",
      deliveryDate: "2024-01-21",
      paymentStatus: "Pending"
    },
    {
      id: "ORD003",
      vendor: "Spice Corner",
      vendorPhone: "+91-9876543212",
      items: ["Tomatoes 8kg"],
      amount: 240,
      status: "Delivered",
      priority: "Normal",
      date: "2024-01-19",
      deliveryDate: "2024-01-20",
      paymentStatus: "Paid"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Order Management</h2>
          <p className="text-gray-400">Track and manage all your orders</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Orders</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Orders</option>
            <option value="confirmed">Confirmed</option>
            <option value="processing">Processing</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Priority:</span>
            <button className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">High (1)</button>
            <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Normal (2)</button>
          </div>
        </div>
      </div>
      
      {/* Orders List */}
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Order #{order.id}</h3>
                  <p className="text-gray-300">{order.vendor}</p>
                  <p className="text-sm text-gray-400">{order.date}</p>
                </div>
                {order.priority === 'High' && (
                  <span className="bg-red-900/30 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                    High Priority
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">₹{order.amount}</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Delivered' ? 'bg-green-900/30 text-green-400' :
                    order.status === 'Confirmed' ? 'bg-blue-900/30 text-blue-400' :
                    order.status === 'Processing' ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {order.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.paymentStatus === 'Paid' ? 'bg-green-900/30 text-green-400' :
                    'bg-orange-900/30 text-orange-400'
                  }`}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Items:</p>
                <div className="space-y-1">
                  {order.items.map(item => (
                    <div key={item} className="text-sm text-gray-300">• {item}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Delivery Details:</p>
                <div className="text-sm text-gray-300">
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Expected: {order.deliveryDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{order.vendorPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {order.status === 'Processing' && (
                <>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Mark Ready</span>
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                    <Truck className="h-4 w-4" />
                    <span>Arrange Pickup</span>
                  </button>
                </>
              )}
              {order.status === 'Confirmed' && (
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  Start Processing
                </button>
              )}
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Contact Vendor</span>
              </button>
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Business Analytics</h2>
        <p className="text-gray-400">Comprehensive insights into your business performance</p>
      </div>
      
      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Revenue', value: '₹1,24,500', change: '+23%', color: 'text-green-400' },
          { label: 'Orders Completed', value: '156', change: '+18%', color: 'text-blue-400' },
          { label: 'Avg Order Value', value: '₹798', change: '+5%', color: 'text-orange-400' },
          { label: 'Customer Retention', value: '78%', change: '+12%', color: 'text-purple-400' }
        ].map((metric, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className={`text-sm ${metric.color}`}>{metric.change} from last month</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Sales Trends */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Sales Trends</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">This Week</span>
              <span className="font-semibold text-white">₹12,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Last Week</span>
              <span className="font-semibold text-white">₹10,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Growth Rate</span>
              <span className="font-semibold text-green-400">+22%</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 mt-4">
              <div className="text-sm text-gray-400 mb-2">Peak Sales Hours</div>
              <div className="text-white">10:00 AM - 2:00 PM</div>
            </div>
          </div>
        </div>

        {/* Customer Insights */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Customer Insights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">New Customers</span>
              <span className="font-semibold text-blue-400">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Returning Customers</span>
              <span className="font-semibold text-green-400">89</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Customer Lifetime Value</span>
              <span className="font-semibold text-white">₹4,250</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 mt-4">
              <div className="text-sm text-gray-400 mb-2">Top Customer Segment</div>
              <div className="text-white">Street Food Vendors (67%)</div>
            </div>
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Product Performance</h3>
          <div className="space-y-3">
            {[
              { name: 'Fresh Onions', revenue: '₹15,500', margin: '25%', trend: 'up' },
              { name: 'Red Tomatoes', revenue: '₹12,800', margin: '22%', trend: 'up' },
              { name: 'Potatoes', revenue: '₹9,200', margin: '18%', trend: 'down' }
            ].map((product, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                <div>
                  <div className="text-white font-medium">{product.name}</div>
                  <div className="text-sm text-gray-400">{product.revenue} • {product.margin} margin</div>
                </div>
                <div className={`text-sm ${product.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {product.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Intelligence */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Market Intelligence</h3>
          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <div className="text-blue-400 font-medium mb-2">Price Opportunity</div>
              <div className="text-blue-300 text-sm">Onion prices 15% below market average. Consider increasing by ₹3/kg</div>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="text-green-400 font-medium mb-2">Demand Forecast</div>
              <div className="text-green-300 text-sm">Tomato demand expected to rise 25% next week due to festival season</div>
            </div>
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
              <div className="text-orange-400 font-medium mb-2">Competitor Alert</div>
              <div className="text-orange-300 text-sm">New supplier offering similar products 10% cheaper in your area</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerManagement() {
  const customers = [
    {
      id: 1,
      name: "Sharma Chaat Corner",
      owner: "Rajesh Kumar",
      phone: "+91-9876543210",
      email: "rajesh@sharmachaat.com",
      totalOrders: 45,
      totalSpent: 12500,
      lastOrder: "2 days ago",
      rating: 4.8,
      status: "Active",
      joinDate: "Jan 2024"
    },
    {
      id: 2,
      name: "Delhi Street Foods",
      owner: "Priya Sharma",
      phone: "+91-9876543211",
      email: "priya@delhistreet.com",
      totalOrders: 32,
      totalSpent: 8900,
      lastOrder: "1 week ago",
      rating: 4.6,
      status: "Active",
      joinDate: "Dec 2023"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">Customer Management</h2>
          <p className="text-gray-400">Build stronger relationships with your customers</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Send Newsletter</span>
          </button>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Customers', value: '156', icon: Users, color: 'text-blue-400' },
          { label: 'Active This Month', value: '89', icon: CheckCircle, color: 'text-green-400' },
          { label: 'Avg Order Value', value: '₹798', icon: DollarSign, color: 'text-orange-400' },
          { label: 'Customer Satisfaction', value: '4.7/5', icon: Star, color: 'text-yellow-400' }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Customer List */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Customer Directory</h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-700">
          {customers.map(customer => (
            <div key={customer.id} className="p-6 hover:bg-gray-700/50">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{customer.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{customer.name}</h4>
                    <p className="text-gray-300">{customer.owner}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-400">
                      <span>{customer.phone}</span>
                      <span>{customer.email}</span>
                      <span>Joined {customer.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{customer.rating}</span>
                  </div>
                  <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-xs">
                    {customer.status}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-700">
                <div>
                  <div className="text-sm text-gray-400">Total Orders</div>
                  <div className="text-lg font-semibold text-white">{customer.totalOrders}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Spent</div>
                  <div className="text-lg font-semibold text-white">₹{customer.totalSpent.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Last Order</div>
                  <div className="text-lg font-semibold text-white">{customer.lastOrder}</div>
                </div>
              </div>

              <div className="flex space-x-3 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </button>
                <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700">
                  View Orders
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketingTools() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Marketing & Growth Tools</h2>
        <p className="text-gray-400">Promote your business and attract more customers</p>
      </div>

      {/* Marketing Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Profile Views', value: '1,234', change: '+15%', color: 'text-blue-400' },
          { label: 'Promotion Clicks', value: '456', change: '+23%', color: 'text-green-400' },
          { label: 'Referrals', value: '12', change: '+8%', color: 'text-orange-400' },
          { label: 'Social Shares', value: '89', change: '+45%', color: 'text-purple-400' }
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.color}`}>{stat.change} this month</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Promotional Campaigns */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Promotional Campaigns</h3>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Create Campaign</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Festival Special Discount', type: '15% Off', status: 'Active', clicks: 234, conversions: 12 },
              { name: 'Bulk Order Promotion', type: 'Buy 50kg+ Get 10% Off', status: 'Scheduled', clicks: 0, conversions: 0 },
              { name: 'New Customer Welcome', type: 'Free Delivery', status: 'Completed', clicks: 156, conversions: 8 }
            ].map((campaign, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-medium">{campaign.name}</h4>
                    <p className="text-gray-400 text-sm">{campaign.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    campaign.status === 'Active' ? 'bg-green-900/30 text-green-400' :
                    campaign.status === 'Scheduled' ? 'bg-blue-900/30 text-blue-400' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{campaign.clicks} clicks</span>
                  <span>{campaign.conversions} conversions</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO & Visibility */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">SEO & Visibility</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Profile Completeness</span>
                <span className="text-green-400">85%</span>
              </div>
              <div className="bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">Add business hours and certifications to reach 100%</p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Search Ranking</span>
                <span className="text-blue-400">#3</span>
              </div>
              <p className="text-gray-400 text-sm">For "fresh vegetables Delhi" - improved from #5</p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Keywords Performance</span>
                <button className="text-orange-400 text-sm">Optimize</button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">"fresh onions"</span>
                  <span className="text-green-400">Rank #2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">"wholesale vegetables"</span>
                  <span className="text-yellow-400">Rank #7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Integration */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <span className="text-white">Facebook Business</span>
              </div>
              <button className="text-blue-400 text-sm">Connect</button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">IG</span>
                </div>
                <span className="text-white">Instagram</span>
              </div>
              <span className="text-green-400 text-sm">Connected</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">WA</span>
                </div>
                <span className="text-white">WhatsApp Business</span>
              </div>
              <span className="text-green-400 text-sm">Connected</span>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center justify-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Auto-Post Product Updates</span>
            </button>
          </div>
        </div>

        {/* Referral Program */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Referral Program</h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-orange-400" />
                <span className="text-orange-400 font-medium">Your Referral Code</span>
              </div>
              <div className="text-2xl font-bold text-white mb-2">FRESH2024</div>
              <p className="text-orange-300 text-sm">Share this code and earn ₹100 for each new supplier who joins</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">12</div>
                <div className="text-sm text-gray-400">Successful Referrals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹1,200</div>
                <div className="text-sm text-gray-400">Earned This Month</div>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
              <Share2 className="h-4 w-4" />
              <span>Share Referral Code</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupplierSettings() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Account Settings</h2>
        <p className="text-gray-400">Manage your account preferences and business information</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Business Profile */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
                <input 
                  type="text" 
                  value="Fresh Vegetables Delhi"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Contact Person</label>
                <input 
                  type="text" 
                  value="Ramesh Kumar"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value="+91 98765 43210"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  value="ramesh@freshveggies.com"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1">Business Address</label>
                <textarea 
                  value="Shop 45, Azadpur Mandi, Delhi - 110033"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-3">
              {[
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ].map(day => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-gray-300 w-20">{day}</span>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="time" 
                      defaultValue="06:00"
                      className="px-3 py-1 bg-gray-700 border border-gray-600 text-white rounded text-sm focus:ring-2 focus:ring-orange-500"
                    />
                    <span className="text-gray-400">to</span>
                    <input 
                      type="time" 
                      defaultValue="18:00"
                      className="px-3 py-1 bg-gray-700 border border-gray-600 text-white rounded text-sm focus:ring-2 focus:ring-orange-500"
                    />
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-2" />
                      <span className="text-gray-400 text-sm">Open</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Payment Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bank Account Number</label>
                <input 
                  type="text" 
                  value="1234567890123456"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">IFSC Code</label>
                  <input 
                    type="text" 
                    value="HDFC0001234"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">UPI ID</label>
                  <input 
                    type="text" 
                    value="ramesh@paytm"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Verification Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Verification Status</h3>
            <div className="space-y-3">
              {[
                { item: 'Phone Number', status: 'verified', icon: CheckCircle },
                { item: 'Email Address', status: 'verified', icon: CheckCircle },
                { item: 'Business License', status: 'verified', icon: CheckCircle },
                { item: 'Bank Account', status: 'pending', icon: Clock },
                { item: 'GST Certificate', status: 'missing', icon: AlertCircle }
              ].map((verification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{verification.item}</span>
                  <div className="flex items-center space-x-2">
                    <verification.icon className={`h-4 w-4 ${
                      verification.status === 'verified' ? 'text-green-400' :
                      verification.status === 'pending' ? 'text-yellow-400' :
                      'text-red-400'
                    }`} />
                    <span className={`text-sm capitalize ${
                      verification.status === 'verified' ? 'text-green-400' :
                      verification.status === 'pending' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {verification.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
            <div className="space-y-3">
              {[
                { label: 'New Orders', enabled: true },
                { label: 'Payment Updates', enabled: true },
                { label: 'Marketing Tips', enabled: false },
                { label: 'System Updates', enabled: true },
                { label: 'Customer Reviews', enabled: true }
              ].map((notification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{notification.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      defaultChecked={notification.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Account Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">
                Save Changes
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Download Data
              </button>
              <button className="w-full border border-gray-600 text-gray-300 py-2 rounded-lg hover:bg-gray-700">
                Reset Password
              </button>
              <button className="w-full border border-red-600 text-red-400 py-2 rounded-lg hover:bg-red-900/20">
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}