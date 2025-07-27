import React, { useState } from 'react';
import { TrendingUp, Cloud, Calendar, AlertTriangle } from 'lucide-react';

interface ForecastData {
  ingredient: string;
  currentDemand: number;
  predictedDemand: number;
  confidence: number;
  factors: string[];
  recommendation: string;
}

export function DemandForecast() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '15d' | '30d'>('7d');
  
  const forecasts: ForecastData[] = [
    {
      ingredient: 'Onions',
      currentDemand: 100,
      predictedDemand: 145,
      confidence: 87,
      factors: ['Monsoon season', 'Festival demand', 'Price volatility'],
      recommendation: 'Stock up 45% more than usual'
    },
    {
      ingredient: 'Tomatoes',
      currentDemand: 80,
      predictedDemand: 65,
      confidence: 92,
      factors: ['Post-festival dip', 'Good harvest expected'],
      recommendation: 'Reduce inventory by 20%'
    },
    {
      ingredient: 'Cooking Oil',
      currentDemand: 50,
      predictedDemand: 85,
      confidence: 78,
      factors: ['Diwali preparations', 'Bulk cooking season'],
      recommendation: 'Increase stock for festival season'
    }
  ];

  const getDemandTrend = (current: number, predicted: number) => {
    const change = ((predicted - current) / current) * 100;
    if (change > 10) return { color: 'text-red-500', icon: '📈', label: 'High Increase' };
    if (change > 0) return { color: 'text-yellow-500', icon: '📊', label: 'Moderate Increase' };
    return { color: 'text-green-500', icon: '📉', label: 'Decrease' };
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-blue-500" />
          AI Demand Forecast
        </h3>
        <div className="flex space-x-2">
          {(['7d', '15d', '30d'] as const).map(timeframe => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeframe === timeframe
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {forecasts.map((forecast, index) => {
          const trend = getDemandTrend(forecast.currentDemand, forecast.predictedDemand);
          
          return (
            <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h4 className="font-semibold text-white">{forecast.ingredient}</h4>
                  <span className="text-2xl">{trend.icon}</span>
                  <span className={`text-sm font-medium ${trend.color}`}>
                    {trend.label}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Confidence</div>
                  <div className="text-lg font-bold text-green-400">{forecast.confidence}%</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-sm text-gray-400">Current Demand</div>
                  <div className="text-lg font-semibold text-white">{forecast.currentDemand} kg/week</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Predicted Demand</div>
                  <div className={`text-lg font-semibold ${trend.color}`}>
                    {forecast.predictedDemand} kg/week
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-sm text-gray-400 mb-2">Key Factors:</div>
                <div className="flex flex-wrap gap-2">
                  {forecast.factors.map((factor, i) => (
                    <span key={i} className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Recommendation</span>
                </div>
                <div className="text-sm text-blue-300 mt-1">{forecast.recommendation}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="h-5 w-5 text-purple-400" />
          <span className="font-medium text-purple-400">Upcoming Events Impact</span>
        </div>
        <div className="text-sm text-purple-300">
          Karva Chauth (Oct 25): Expect 60% increase in ghee and dry fruits demand
        </div>
        <div className="text-sm text-purple-300">
          Diwali Week (Nov 10-17): Overall ingredient demand up 200-300%
        </div>
      </div>
    </div>
  );
}