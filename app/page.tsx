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
  const ericProgress = ((balances.eric / goal) * 100).toFixed(1);
  const bridgetProgress = ((balances.bridget / goal) * 100).toFixed(1);

  const historicalData = [
    { month: 'Jan', total: 420000 },
    { month: 'Feb', total: 435000 },
    { month: 'Mar', total: 448000 },
    { month: 'Apr', total: 462000 },
    { month: 'May', total: 466508 },
  ];

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#0a0a0a] p-5 text-white">
      
      {/* Header */}
      <div className="mb-8 pt-2">
        <div className="text-[#e31937] text-xs tracking-[4px] font-medium">RETIREMENT TRACKER v2</div>
        <div className="text-4xl font-semibold tracking-[-1px] mt-1">Portfolio Dashboard</div>
        <div className="text-sm text-gray-400 mt-1">Updated just now • 5:30 AM PST daily</div>
      </div>

      {/* Live TSLA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#111] border border-[#333] rounded-3xl p-6 mb-6"
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">LIVE TSLA</div>
            <div className="text-7xl font-semibold tabular-nums tracking-tighter mt-2">${tslaPrice}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 tracking-widest">7-DAY</div>
            <div className="text-3xl font-semibold text-emerald-400 mt-2">+{tslaChange}%</div>
          </div>
        </div>
      </motion.div>

      {/* Retirement Portfolio Summary */}
      <div className="bg-[#111] border border-[#333] rounded-3xl p-6 mb-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">RETIREMENT PORTFOLIO</div>
            <div className="text-6xl font-semibold tabular-nums tracking-tighter mt-1">${retirementTotal.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 tracking-widest">TO $5M GOAL</div>
            <div className="text-4xl font-semibold text-[#e31937] mt-1">{((retirementTotal / goal) * 100).toFixed(1)}%</div>
          </div>
        </div>

        {/* Eric */}
        <div className="mb-5">
          <div className="flex justify-between text-sm mb-2">
            <div>Eric</div>
            <div className="font-medium tabular-nums">${balances.eric.toLocaleString()}</div>
          </div>
          <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
            <div className="h-1.5 bg-[#e31937] rounded-full" style={{ width: `${ericProgress}%` }}></div>
          </div>
          <div className="text-xs text-gray-400 mt-1 text-right">{ericProgress}% of goal</div>
        </div>

        {/* Bridget */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <div>Bridget</div>
            <div className="font-medium tabular-nums">${balances.bridget.toLocaleString()}</div>
          </div>
          <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
            <div className="h-1.5 bg-[#e31937] rounded-full" style={{ width: `${bridgetProgress}%` }}></div>
          </div>
          <div className="text-xs text-gray-400 mt-1 text-right">{bridgetProgress}% of goal</div>
        </div>
      </div>

      {/* Historical Chart */}
      <div className="bg-[#111] border border-[#333] rounded-3xl p-6 mb-6">
        <div className="text-xs text-gray-400 tracking-widest mb-4">PORTFOLIO GROWTH (LAST 5 MONTHS)</div>
        <div className="h-52 -mx-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <XAxis dataKey="month" stroke="#555" fontSize={11} />
              <YAxis stroke="#555" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', borderRadius: '12px', color: '#fff' }} />
              <Line type="natural" dataKey="total" stroke="#e31937" strokeWidth={3.5} dot={{ fill: '#e31937', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Jensen */}
      <div className="bg-[#111] border border-[#333] rounded-3xl p-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">JENSEN (Education / Future)</div>
            <div className="text-4xl font-semibold tabular-nums mt-2">${balances.jensen.toLocaleString()}</div>
          </div>
          <div className="text-xs text-gray-500 text-right">Not included<br />in $5M goal</div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-10 tracking-widest">
        v2.4 • Auto-updates on open • 5:30 AM PST
      </div>
    </div>
  );
}
