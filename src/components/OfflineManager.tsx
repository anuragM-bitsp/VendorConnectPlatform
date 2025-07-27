import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Upload, CheckCircle, Clock } from 'lucide-react';

interface OfflineOrder {
  id: string;
  supplierId: string;
  supplierName: string;
  items: Array<{ name: string; quantity: number; unit: string }>;
  totalAmount: number;
  timestamp: number;
  status: 'pending' | 'synced' | 'failed';
}

export function OfflineManager() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineOrders, setOfflineOrders] = useState<OfflineOrder[]>([]);
  const [syncInProgress, setSyncInProgress] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncOfflineData();
    };
    
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Load offline orders from localStorage
    const savedOrders = localStorage.getItem('offlineOrders');
    if (savedOrders) {
      setOfflineOrders(JSON.parse(savedOrders));
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const syncOfflineData = async () => {
    if (offlineOrders.length === 0) return;
    
    setSyncInProgress(true);
    
    try {
      // Simulate API calls to sync offline orders
      for (const order of offlineOrders) {
        if (order.status === 'pending') {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          order.status = 'synced';
        }
      }
      
      setOfflineOrders(prev => prev.map(order => ({ ...order, status: 'synced' })));
      localStorage.setItem('offlineOrders', JSON.stringify(offlineOrders));
      
      // Clear synced orders after 5 seconds
      setTimeout(() => {
        setOfflineOrders(prev => prev.filter(order => order.status !== 'synced'));
        localStorage.removeItem('offlineOrders');
      }, 5000);
      
    } catch (error) {
      console.error('Sync failed:', error);
      setOfflineOrders(prev => prev.map(order => 
        order.status === 'pending' ? { ...order, status: 'failed' } : order
      ));
    } finally {
      setSyncInProgress(false);
    }
  };

  const addOfflineOrder = (order: Omit<OfflineOrder, 'id' | 'timestamp' | 'status'>) => {
    const newOrder: OfflineOrder = {
      ...order,
      id: Date.now().toString(),
      timestamp: Date.now(),
      status: 'pending'
    };
    
    const updatedOrders = [...offlineOrders, newOrder];
    setOfflineOrders(updatedOrders);
    localStorage.setItem('offlineOrders', JSON.stringify(updatedOrders));
  };

  if (offlineOrders.length === 0 && isOnline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Network Status Indicator */}
      <div className={`mb-4 px-4 py-2 rounded-lg flex items-center space-x-2 ${
        isOnline ? 'bg-green-900/20 border border-green-500/30' : 'bg-red-900/20 border border-red-500/30'
      }`}>
        {isOnline ? (
          <>
            <Wifi className="h-4 w-4 text-green-500" />
            <span className="text-green-400 text-sm">Online</span>
          </>
        ) : (
          <>
            <WifiOff className="h-4 w-4 text-red-500" />
            <span className="text-red-400 text-sm">Offline Mode</span>
          </>
        )}
      </div>

      {/* Offline Orders Queue */}
      {offlineOrders.length > 0 && (
        <div className="bg-gray-800 rounded-lg border border-gray-600 p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-medium">Offline Orders</h3>
            {syncInProgress && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
            )}
          </div>
          
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {offlineOrders.map(order => (
              <div key={order.id} className="bg-gray-700 rounded p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium">{order.supplierName}</span>
                  <div className="flex items-center space-x-1">
                    {order.status === 'pending' && <Clock className="h-3 w-3 text-yellow-500" />}
                    {order.status === 'synced' && <CheckCircle className="h-3 w-3 text-green-500" />}
                    {order.status === 'failed' && <Upload className="h-3 w-3 text-red-500" />}
                  </div>
                </div>
                <div className="text-gray-300 text-xs">
                  {order.items.length} items • ₹{order.totalAmount}
                </div>
                <div className="text-gray-400 text-xs">
                  {new Date(order.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
          
          {!isOnline && (
            <div className="mt-3 text-xs text-gray-400">
              Orders will sync when connection is restored
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Export function to add offline orders from other components
export const useOfflineOrders = () => {
  const addOfflineOrder = (order: Omit<OfflineOrder, 'id' | 'timestamp' | 'status'>) => {
    const event = new CustomEvent('addOfflineOrder', { detail: order });
    window.dispatchEvent(event);
  };

  return { addOfflineOrder };
};