# VendorConnect - Street Food Vendor Supply Chain Platform

![VendorConnect Logo](https://img.shields.io/badge/VendorConnect-Supply%20Chain%20Platform-orange?style=for-the-badge)

## 🌟 Overview

VendorConnect is India's first AI-powered supply chain platform specifically designed for street food vendors. It connects vendors with verified suppliers, enables group buying cooperatives, and provides access to quality raw materials at competitive prices.

## 🚀 Live Demo

Visit the live application: [https://incredible-strudel-743027.netlify.app](https://incredible-strudel-743027.netlify.app)

## ✨ Key Features

### For Vendors
- **🔍 Smart Supplier Discovery**: AI-powered search with voice support in Hindi
- **👥 Group Buying**: Join cooperatives for bulk pricing and better deals
- **📱 AR Quality Scanner**: Scan vegetables, spices, and oil for quality analysis
- **🕵️ Chuppa Rustam Mode**: Undercover price intelligence network
- **💳 UPI Integration**: Seamless payments with multiple UPI apps
- **💬 WhatsApp Integration**: Direct communication with suppliers
- **📊 Price Heat Map**: Real-time price tracking across markets
- **🤖 AI Demand Forecasting**: Predict ingredient demand patterns
- **🔗 Blockchain Trust Scores**: Verified supplier ratings and transaction history
- **📱 Offline Mode**: Continue operations without internet connectivity

### For Suppliers
- **📈 Business Dashboard**: Manage inventory, orders, and customer relationships
- **🎯 Targeted Marketing**: Reach relevant vendors in your area
- **📊 Analytics**: Track sales performance and market trends
- **✅ Verification System**: Build trust through blockchain-verified credentials

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

### Features & Integrations
- **Speech Recognition API** for voice search
- **Camera API** for AR quality scanning
- **Geolocation API** for location-based services
- **Web Storage API** for offline functionality
- **Progressive Web App** capabilities

### Deployment
- **Netlify** for hosting and continuous deployment
- **GitHub** for version control

## 🏗 Project Structure

```
src/
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── LandingPage.tsx           # Hero section and features
│   ├── AuthModal.tsx             # Login/signup modal
│   ├── VendorDashboard.tsx       # Main vendor interface
│   ├── SupplierDashboard.tsx     # Supplier management interface
│   ├── VoiceSearch.tsx           # Voice search functionality
│   ├── ARQualityScanner.tsx      # AR-based quality analysis
│   ├── PriceHeatMap.tsx          # Real-time price visualization
│   ├── DemandForecast.tsx        # AI demand prediction
│   ├── ChuppaRustamMode.tsx      # Price intelligence network
│   ├── ChuppaRustamLanding.tsx   # Onboarding for price scouts
│   ├── UPIPayment.tsx            # Payment integration
│   ├── WhatsAppIntegration.tsx   # Chat functionality
│   ├── BlockchainTrustScore.tsx  # Trust verification system
│   └── OfflineManager.tsx        # Offline functionality
├── types/
│   └── speech.d.ts               # Speech API type definitions
├── App.tsx                       # Main application component
├── main.tsx                      # Application entry point
└── index.css                     # Global styles and animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vendorconnect-platform.git
   cd vendorconnect-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Features

### Modern UI/UX
- **3D Animations**: Sophisticated floating elements and depth effects
- **Smooth Transitions**: Elegant fade-in/fade-out animations
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Theme**: Professional dark color scheme
- **Accessibility**: WCAG compliant with reduced motion support

### Animation System
- **Hardware Accelerated**: GPU-optimized 3D transforms
- **Performance Optimized**: Efficient animations with minimal reflow
- **Mobile Friendly**: Simplified animations for better battery life
- **Accessibility**: Respects user motion preferences

## 🌍 Localization

- **Hindi Voice Search**: Native language support for Indian vendors
- **Regional Pricing**: Location-based price discovery
- **Local Market Integration**: Connects with traditional wholesale markets

## 🔒 Security & Trust

- **Blockchain Verification**: Immutable supplier credentials
- **Encrypted Communications**: Secure data transmission
- **Privacy Protection**: Anonymous price intelligence network
- **Verified Suppliers**: Multi-level verification system

## 📱 Progressive Web App

- **Offline Functionality**: Continue operations without internet
- **Push Notifications**: Real-time updates and alerts
- **App-like Experience**: Native mobile app feel
- **Fast Loading**: Optimized performance and caching

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Street Food Vendors** across India for inspiring this platform
- **Open Source Community** for the amazing tools and libraries
- **Design Inspiration** from modern web applications and mobile apps

## 📞 Support

For support, email support@vendorconnect.in or join our community discussions.

## 🗺 Roadmap

- [ ] **Multi-language Support**: Expand beyond Hindi
- [ ] **IoT Integration**: Smart inventory management
- [ ] **Machine Learning**: Advanced demand prediction
- [ ] **Cryptocurrency Payments**: Blockchain-based transactions
- [ ] **Franchise Management**: Multi-location vendor support
- [ ] **Supply Chain Analytics**: Advanced business intelligence

---

**Built with ❤️ for India's street food ecosystem**

![Made in India](https://img.shields.io/badge/Made%20in-India-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)