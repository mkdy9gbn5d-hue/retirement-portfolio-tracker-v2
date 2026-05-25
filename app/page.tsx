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
  const [lastUpdated, setLastUpdated] = useState('');

  const retirementTotal = balances.eric + balances.bridget;
  const goal = 5000000;
  const progress = ((retirementTotal / goal) * 100).toFixed(1);

  const historicalData = [
    { date: 'Jan', total: 420000 },
    { date: 'Feb', total: 435000 },
    { date: 'Mar', total: 448000 },
    { date: 'Apr', total: 462000 },
    { date: 'May', total: 466508 },
  ];

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#0a0a0a] p-4 text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pt-2">
        <div>
          <div className="text-[#e31937] text-xs tracking-[4px] font-medium">RETIREMENT TRACKER v2</div>
          <div className="text-4xl font-semibold tracking-tight">Portfolio Dashboard</div>
        </div>
        <div className="text-right text-xs text-gray-400">
          Updated {lastUpdated}
        </div>
      </div>

      {/* Live TSLA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6 mb-6 flex justify-between items-center"
      >
        <div>
          <div className="text-xs text-gray-400 tracking-widest">LIVE TSLA</div>
          <div className="text-6xl font-semibold tabular-nums mt-1">${tslaPrice}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 tracking-widest">7-DAY</div>
          <div className="text-3xl font-semibold text-emerald-400 mt-1">+{tslaChange}%</div>
        </div>
      </motion.div>

      {/* Retirement Portfolio */}
      <div className="card p-6 mb-6">
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">RETIREMENT PORTFOLIO</div>
            <div className="text-6xl font-semibold tabular-nums mt-2">${retirementTotal.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 tracking-widest">TO $5M GOAL</div>
            <div className="text-4xl font-semibold text-[#e31937] mt-2">{progress}%</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className="text-lg">Eric</div>
            <div className="font-medium text-xl tabular-nums">${balances.eric.toLocaleString()}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg">Bridget</div>
            <div className="font-medium text-xl tabular-nums">${balances.bridget.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Historical Chart */}
      <div className="card p-6 mb-6">
        <div className="text-xs text-gray-400 tracking-widest mb-4">PORTFOLIO GROWTH (LAST 5 MONTHS)</div>
        <div className="h-56 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <XAxis dataKey="date" stroke="#555" fontSize={11} />
              <YAxis stroke="#555" fontSize={11} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f1f1f', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff',
                  padding: '12px'
                }} 
              />
              <Line 
                type="natural" 
                dataKey="total" 
                stroke="#e31937" 
                strokeWidth={3.5}
                dot={{ fill: '#e31937', r: 5, strokeWidth: 2, stroke: '#0a0a0a' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Jensen (Separate) */}
      <div className="card p-6 mb-6 bg-[#1a1a1a]">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">JENSEN (Education / Future)</div>
            <div className="text-4xl font-semibold mt-2 tabular-nums">${balances.jensen.toLocaleString()}</div>
          </div>
          <div className="text-xs text-gray-500 text-right">Not included<br />in $5M goal</div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-10 tracking-widest">
        v2.3 • Auto-updates on open • 5:30 AM PST backup
      </div>
    </div>
  );
}
