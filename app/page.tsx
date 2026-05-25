'use client';

import { useEffect, useState } from 'react';

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

  useEffect(() => {
    // TODO: Replace with real Truthify API call
    console.log('Fetching live balances from Truthify...');
  }, []);

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#0a0a0a] p-4 text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-4">
        <div>
          <div className="text-[#e31937] text-xs tracking-[3px]">RETIREMENT TRACKER v2</div>
          <div className="text-3xl font-semibold">Portfolio Dashboard</div>
        </div>
        <div className="text-right text-xs text-gray-400">5:30 AM PST</div>
      </div>

      {/* Live TSLA */}
      <div className="card p-5 mb-4 flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-400">LIVE TSLA</div>
          <div className="text-5xl font-semibold">${tslaPrice}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">7-DAY CHANGE</div>
          <div className="text-2xl font-semibold text-emerald-400">+{tslaChange}%</div>
        </div>
      </div>

      {/* Retirement Portfolio (Eric + Bridget) */}
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

      {/* Progress Bar */}
      <div className="card p-5 mb-4">
        <div className="h-3 bg-[#333] rounded-full overflow-hidden mb-2">
          <div className="h-3 bg-[#e31937] transition-all" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <div>${retirementTotal.toLocaleString()}</div>
          <div>$5,000,000</div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-8">
        v2.0 • Live from Truthify • 5:30 AM PST
      </div>
    </div>
  );
}
