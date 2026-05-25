'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function RetirementDashboard() {
  const [balances, setBalances] = useState({
    eric: 302085,
    bridget: 164423,
    jensen: 21932,
  });
  const [tslaPrice, setTslaPrice] = useState(423.67);
  const [tslaChange, setTslaChange] = useState(1.26);

  const retirementTotal = balances.eric + balances.bridget;
  const goal = 5000000;
  const progress = ((retirementTotal / goal) * 100).toFixed(1);

  // Sample historical data (we'll make this dynamic later)
  const historicalData = [
    { date: 'Jan', total: 420000 },
    { date: 'Feb', total: 435000 },
    { date: 'Mar', total: 448000 },
    { date: 'Apr', total: 462000 },
    { date: 'May', total: 466508 },
  ];

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#0a0a0a] p-4 text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-4">
        <div>
          <div className="text-[#e31937] text-xs tracking-[3px]">RETIREMENT TRACKER v2</div>
          <div className="text-3xl font-semibold">Portfolio Dashboard</div>
        </div>
        <div className="text-right text-xs text-gray-400">Live</div>
      </div>

      {/* Live TSLA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-5 mb-4 flex justify-between items-center"
      >
        <div>
          <div className="text-xs text-gray-400">LIVE TSLA</div>
          <div className="text-5xl font-semibold">${tslaPrice}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">7-DAY CHANGE</div>
          <div className="text-2xl font-semibold text-emerald-400">+{tslaChange}%</div>
        </div>
      </motion.div>

      {/* Retirement Portfolio */}
      <div className="card p-5 mb-4">
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-xs text-gray-400">RETIREMENT PORTFOLIO</div>
            <div className="text-5xl font-semibold">${retirementTotal.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">TO $5M GOAL</div>
            <div className="text-3xl font-semibold text-[#e31937]">{progress}%</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between"><div>Eric</div><div className="font-medium">${balances.eric.toLocaleString()}</div></div>
          <div className="flex justify-between"><div>Bridget</div><div className="font-medium">${balances.bridget.toLocaleString()}</div></div>
        </div>
      </div>

      {/* Historical Chart */}
      <div className="card p-5 mb-4">
        <div className="text-xs text-gray-400 mb-3">PORTFOLIO GROWTH (LAST 5 MONTHS)</div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', color: '#fff' }} 
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="#e31937" 
                strokeWidth={3}
                dot={{ fill: '#e31937', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Jensen (Separate) */}
      <div className="card p-5 mb-4 bg-[#1a1a1a]">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400">JENSEN (Education / Future)</div>
            <div className="text-3xl font-semibold">${balances.jensen.toLocaleString()}</div>
          </div>
          <div className="text-xs text-gray-500">Not in $5M goal</div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-8">
        v2.1 • Historical tracking enabled • 5:30 AM PST
      </div>
    </div>
  );
}
