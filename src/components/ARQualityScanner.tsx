import React, { useState, useRef } from 'react';
import { Camera, Scan, CheckCircle, AlertTriangle, X } from 'lucide-react';

interface QualityResult {
  item: string;
  freshness: number;
  quality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  shelfLife: string;
  issues: string[];
  recommendations: string[];
}

interface ARQualityScannerProps {
  onClose: () => void;
}

export function ARQualityScanner({ onClose }: ARQualityScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<QualityResult | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startScanning = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsScanning(true);
        
        // Simulate AI analysis after 3 seconds
        setTimeout(() => {
          simulateQualityAnalysis();
        }, 3000);
      }
    } catch (error) {
      console.error('Camera access denied:', error);
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError' || error.message.includes('Permission denied')) {
          setCameraError('Camera access was denied. Please allow camera access in your browser settings and try again.');
        } else if (error.name === 'NotFoundError') {
          setCameraError('No camera found on this device.');
        } else if (error.name === 'NotSupportedError') {
          setCameraError('Camera is not supported on this device or browser.');
        } else {
          setCameraError('Unable to access camera. Please check your browser settings.');
        }
      } else {
        setCameraError('Unable to access camera. Please check your browser settings.');
      }
    }
  };

  const simulateQualityAnalysis = () => {
    // Simulate AI-powered quality analysis
    const mockResult: QualityResult = {
      item: 'Fresh Tomatoes',
      freshness: 87,
      quality: 'Good',
      shelfLife: '4-5 days',
      issues: ['Minor soft spots detected', 'Slight color variation'],
      recommendations: [
        'Use within 4 days for best quality',
        'Store in cool, dry place',
        'Check for ripeness daily'
      ]
    };
    
    setResult(mockResult);
    setIsScanning(false);
    
    // Stop camera
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Excellent': return 'text-green-500';
      case 'Good': return 'text-blue-500';
      case 'Fair': return 'text-yellow-500';
      case 'Poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Scan className="h-6 w-6 mr-2 text-orange-500" />
              Quality Scanner
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {!isScanning && !result && !cameraError && (
            <div className="text-center">
              <div className="bg-gray-700 rounded-lg p-8 mb-6">
                <Camera className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-300 mb-4">
                  Point your camera at vegetables, spices, or oil to analyze quality instantly
                </p>
                <button
                  onClick={startScanning}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start Scanning
                </button>
              </div>
              <div className="text-sm text-gray-400">
                <p className="mb-2">✓ Freshness detection</p>
                <p className="mb-2">✓ Adulterant identification</p>
                <p>✓ Shelf life prediction</p>
              </div>
            </div>
          )}

          {cameraError && (
            <div className="text-center">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8 mb-6">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-400 mb-4">Camera Access Required</h3>
                <p className="text-red-300 mb-6">{cameraError}</p>
                <div className="text-sm text-red-200 mb-6 text-left">
                  <p className="mb-2"><strong>To enable camera access:</strong></p>
                  <p className="mb-1">1. Click the camera icon in your browser's address bar</p>
                  <p className="mb-1">2. Select "Always allow" for camera access</p>
                  <p className="mb-1">3. Refresh the page and try again</p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setCameraError(null)}
                    className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {isScanning && (
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-64 bg-black rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-2 border-orange-500 w-48 h-48 rounded-lg animate-pulse">
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-orange-500"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-orange-500"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-75 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
                  <span>Analyzing quality...</span>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{result.item}</h3>
                  <div className={`text-lg font-bold ${getQualityColor(result.quality)}`}>
                    {result.quality}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Freshness Score</span>
                    <span className="text-white font-medium">{result.freshness}%</span>
                  </div>
                  <div className="bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${result.freshness}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-400 text-sm">Shelf Life</span>
                    <div className="text-white font-medium">{result.shelfLife}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Overall Rating</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-white font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {result.issues.length > 0 && (
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium text-yellow-400">Issues Detected</span>
                  </div>
                  <ul className="text-sm text-yellow-300 space-y-1">
                    {result.issues.map((issue, index) => (
                      <li key={index}>• {issue}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-medium text-blue-400">Recommendations</span>
                </div>
                <ul className="text-sm text-blue-300 space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setResult(null)}
                  className="flex-1 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-900/20"
                >
                  Scan Again
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Accept Quality
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}