import React from 'react';
import { Users, Shield, TrendingDown, Clock, Star, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black min-h-screen flex items-center">
        {/* Enhanced 3D Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="hero-3d-grid"></div>
        </div>
        
        {/* Advanced 3D Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary 3D Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-2xl animate-float-3d shadow-3d"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-full blur-2xl animate-float-delayed-3d shadow-3d"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-br from-green-500/30 to-teal-500/20 rounded-full blur-2xl animate-float-slow-3d shadow-3d"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-2xl animate-float-3d shadow-3d"></div>
          
          {/* Secondary Geometric Elements */}
          <div className="absolute top-60 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 transform rotate-45 animate-rotate-3d shadow-3d"></div>
          <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg animate-pulse-3d shadow-3d"></div>
          
          {/* Particle System */}
          <div className="absolute inset-0">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
        
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="animated-pattern"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center relative z-10">
            {/* Enhanced Typography with 3D Effects */}
            <div className="mb-8 animate-hero-fade-in">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 mb-6 animate-badge-float">
                <Sparkles className="h-5 w-5 text-orange-400 mr-2 animate-sparkle" />
                <span className="text-orange-300 font-medium">India's First AI-Powered Supply Chain</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-hero-title-reveal">
              <span className="block animate-text-3d-1">Revolutionizing</span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-text-3d-2 hero-gradient-text">
                Street Food
              </span>
              <span className="block text-blue-400 animate-text-3d-3">Supply Chain</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-hero-subtitle-fade font-light">
              <span className="animate-typewriter-1">Connect with verified suppliers, join group buying cooperatives,</span>
              <br className="hidden md:block" />
              <span className="animate-typewriter-2">and access quality raw materials at competitive prices.</span>
              <br />
              <span className="text-orange-300 font-medium animate-typewriter-3">Built specifically for India's 2.5M street food vendors.</span>
            </p>
            
            {/* Enhanced CTA Buttons with 3D Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-hero-cta-rise">
              <button
                onClick={onGetStarted}
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 flex items-center justify-center transform hover:scale-110 hover:rotate-1 cta-button-3d animate-cta-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Zap className="mr-3 h-6 w-6 animate-bounce" />
                  <span>Join as Vendor</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button
                onClick={onGetStarted}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:-rotate-1 cta-button-3d"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Shield className="mr-3 h-6 w-6 animate-pulse" />
                  <span>Register as Supplier</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>
            
            {/* Trust Indicators with Fade Animation */}
            <div className="mt-16 animate-trust-indicators-fade">
              <p className="text-gray-400 text-sm mb-6 font-medium">Trusted by vendors across India</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center space-x-2 animate-trust-badge-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-medium">500+ Active Vendors</span>
                </div>
                <div className="flex items-center space-x-2 animate-trust-badge-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-medium">150+ Verified Suppliers</span>
                </div>
                <div className="flex items-center space-x-2 animate-trust-badge-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm font-medium">₹50L+ Transactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">
              Solving Real Problems for Street Food Vendors
            </h2>
            <p className="text-xl text-gray-300">
              Our platform addresses the core challenges in raw material sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up">
              <div className="bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Group Buying Power</h3>
              <p className="text-gray-300">
                Join cooperatives with other vendors to access bulk pricing and better deals
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-200">
              <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified Suppliers</h3>
              <p className="text-gray-300">
                All suppliers are vetted for quality, reliability, and fair pricing practices
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-400">
              <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <TrendingDown className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Best Prices</h3>
              <p className="text-gray-300">
                Compare prices across suppliers and access exclusive group discounts
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-600">
              <div className="bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Delivery</h3>
              <p className="text-gray-300">
                Track orders in real-time and ensure timely delivery to your location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="transform transition-all duration-500 hover:scale-105 animate-counter">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-300">Registered Vendors</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-105 animate-counter animation-delay-200">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">150+</div>
              <div className="text-gray-300">Verified Suppliers</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-105 animate-counter animation-delay-400">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">25%</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6 animate-bounce-gentle">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
          <blockquote className="text-2xl text-gray-300 mb-6 animate-fade-in-up">
            "VendorConnect helped me reduce my raw material costs by 30% and connect with reliable suppliers. 
            The group buying feature is a game-changer for small vendors like me."
          </blockquote>
          <div className="text-gray-400 animate-fade-in-up animation-delay-200">
            <div className="font-semibold">Rajesh Kumar</div>
            <div>Chaat Vendor, Delhi</div>
          </div>
        </div>
      </div>
    </div>
  );
}