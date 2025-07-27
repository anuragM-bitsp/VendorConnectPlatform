import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MarketData {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  prices: {
    onions: number;
    tomatoes: number;
    potatoes: number;
    oil: number;
  };
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export function PriceHeatMap() {
  const [selectedIngredient, setSelectedIngredient] = useState<keyof MarketData['prices']>('onions');
  const [markets] = useState<MarketData[]>([
    {
      id: '1',
      name: 'Azadpur Mandi',
      location: { lat: 28.7041, lng: 77.1025 },
      prices: { onions: 22, tomatoes: 28, potatoes: 18, oil: 115 },
      trend: 'down',
      change: -5
    },
    {
      id: '2',
      name: 'INA Market',
      location: { lat: 28.5706, lng: 77.2144 },
      prices: { onions: 28, tomatoes: 35, potatoes: 25, oil: 125 },
      trend: 'up',
      change: 8
    },
    {
      id: '3',
      name: 'Sadar Bazaar',
      location: { lat: 28.6562, lng: 77.2410 },
      prices: { onions: 25, tomatoes: 30, potatoes: 20, oil: 120 },
      trend: 'stable',
      change: 0
    },
    {
      id: '4',
      name: 'Chandni Chowk',
      location: { lat: 28.6506, lng: 77.2334 },
      prices: { onions: 30, tomatoes: 38, potatoes: 28, oil: 130 },
      trend: 'up',
      change: 12
    },
    {
      id: '5',
      name: 'Lajpat Nagar',
      location: { lat: 28.5677, lng: 77.2431 },
      prices: { onions: 24, tomatoes: 32, potatoes: 22, oil: 118 },
      trend: 'down',
      change: -3
    }
  ]);

  const getHeatColor = (price: number, ingredient: keyof MarketData['prices']) => {
    const prices = markets.map(m => m.prices[ingredient]);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const normalized = (price - min) / (max - min);
    
    if (normalized < 0.33) return 'bg-green-500';
    if (normalized < 0.66) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-green-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const ingredients = [
    { key: 'onions' as const, label: 'Onions', unit: '/kg' },
    { key: 'tomatoes' as const, label: 'Tomatoes', unit: '/kg' },
    { key: 'potatoes' as const, label: 'Potatoes', unit: '/kg' },
    { key: 'oil' as const, label: 'Cooking Oil', unit: '/L' }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Live Price Heat Map</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Low</span>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span>Medium</span>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>High</span>
        </div>
      </div>

      {/* Ingredient Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ingredients.map(ingredient => (
          <button
            key={ingredient.key}
            onClick={() => setSelectedIngredient(ingredient.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedIngredient === ingredient.key
                ? 'bg-orange-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {ingredient.label}
          </button>
        ))}
      </div>

      {/* Market Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {markets.map(market => {
          const currentPrice = market.prices[selectedIngredient];
          const ingredient = ingredients.find(i => i.key === selectedIngredient);
          
          return (
            <div
              key={market.id}
              className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-white text-sm">{market.name}</h4>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Delhi</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full ${getHeatColor(currentPrice, selectedIngredient)} animate-pulse`}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">
                    ₹{currentPrice}
                    <span className="text-sm text-gray-400 font-normal">
                      {ingredient?.unit}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(market.trend)}
                  <span className={`text-xs font-medium ${
                    market.trend === 'up' ? 'text-red-500' :
                    market.trend === 'down' ? 'text-green-500' :
                    'text-gray-500'
                  }`}>
                    {market.change > 0 ? '+' : ''}{market.change}%
                  </span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-600">
                <div className="text-xs text-gray-400">
                  Updated 2 min ago
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Best Deal Highlight */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-green-400 font-medium text-sm">Best Deal Today</div>
            <div className="text-white">
              {ingredients.find(i => i.key === selectedIngredient)?.label} at{' '}
              {markets.reduce((best, market) => 
                market.prices[selectedIngredient] < best.prices[selectedIngredient] ? market : best
              ).name}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">
              ₹{Math.min(...markets.map(m => m.prices[selectedIngredient]))}
            </div>
            <div className="text-xs text-green-300">Save up to ₹8/kg</div>
          </div>
        </div>
      </div>
    </div>
  );
}