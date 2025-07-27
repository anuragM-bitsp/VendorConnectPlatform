import React, { useState } from 'react';
import { CreditCard, Smartphone, QrCode, CheckCircle, X, Copy } from 'lucide-react';

interface UPIPaymentProps {
  amount: number;
  orderId: string;
  supplierName: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentCancel: () => void;
}

export function UPIPayment({ amount, orderId, supplierName, onPaymentSuccess, onPaymentCancel }: UPIPaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'upi' | 'apps'>('apps');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [qrCopied, setQrCopied] = useState(false);

  // Generate UPI payment string
  const generateUPIString = (upiId: string) => {
    const params = new URLSearchParams({
      pa: upiId || 'vendor@paytm', // Payee UPI ID
      pn: supplierName,
      am: amount.toString(),
      cu: 'INR',
      tn: `Order ${orderId} - ${supplierName}`,
      tr: orderId
    });
    return `upi://pay?${params.toString()}`;
  };

  const handleUPIAppPayment = (app: string) => {
    setProcessing(true);
    const upiString = generateUPIString('vendor@paytm');
    
    // Simulate opening UPI app
    window.open(upiString, '_blank');
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentSuccess(`TXN${Date.now()}`);
    }, 3000);
  };

  const handleQRPayment = () => {
    const upiString = generateUPIString('vendor@paytm');
    navigator.clipboard.writeText(upiString);
    setQrCopied(true);
    setTimeout(() => setQrCopied(false), 2000);
  };

  const handleManualUPI = () => {
    if (!upiId) return;
    setProcessing(true);
    
    // Simulate UPI payment
    setTimeout(() => {
      setProcessing(false);
      onPaymentSuccess(`TXN${Date.now()}`);
    }, 2000);
  };

  const upiApps = [
    { name: 'PhonePe', icon: '📱', color: 'bg-purple-600' },
    { name: 'Google Pay', icon: '💳', color: 'bg-blue-600' },
    { name: 'Paytm', icon: '💰', color: 'bg-blue-500' },
    { name: 'BHIM', icon: '🏦', color: 'bg-orange-600' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">UPI Payment</h2>
            <button onClick={onPaymentCancel} className="text-gray-400 hover:text-gray-300">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Amount</span>
              <span className="text-2xl font-bold text-green-400">₹{amount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Supplier</span>
              <span className="text-white">{supplierName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Order ID</span>
              <span className="text-white">{orderId}</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setPaymentMethod('apps')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  paymentMethod === 'apps' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                UPI Apps
              </button>
              <button
                onClick={() => setPaymentMethod('qr')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  paymentMethod === 'qr' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                QR Code
              </button>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  paymentMethod === 'upi' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                UPI ID
              </button>
            </div>

            {/* UPI Apps */}
            {paymentMethod === 'apps' && (
              <div className="grid grid-cols-2 gap-3">
                {upiApps.map(app => (
                  <button
                    key={app.name}
                    onClick={() => handleUPIAppPayment(app.name)}
                    disabled={processing}
                    className={`${app.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center space-x-2`}
                  >
                    <span className="text-2xl">{app.icon}</span>
                    <span className="font-medium">{app.name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* QR Code */}
            {paymentMethod === 'qr' && (
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QrCode className="h-32 w-32 text-gray-800" />
                </div>
                <p className="text-gray-300 mb-4">Scan with any UPI app to pay</p>
                <button
                  onClick={handleQRPayment}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 mx-auto"
                >
                  <Copy className="h-4 w-4" />
                  <span>{qrCopied ? 'Copied!' : 'Copy UPI Link'}</span>
                </button>
              </div>
            )}

            {/* Manual UPI ID */}
            {paymentMethod === 'upi' && (
              <div>
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., 9876543210@paytm)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg mb-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handleManualUPI}
                  disabled={!upiId || processing}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            )}
          </div>

          {/* Processing State */}
          {processing && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
              <p className="text-gray-300">Processing payment...</p>
            </div>
          )}

          {/* Security Note */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 mt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm">Secure UPI payment powered by NPCI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}