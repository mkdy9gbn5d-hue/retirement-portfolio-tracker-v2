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
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

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

  // Enable Push Notifications
  const enableNotifications = async () => {
    if (!('Notification' in window)) {
      alert('Push notifications are not supported in this browser');
      return;
    }

    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      setNotificationsEnabled(true);
      
      // Subscribe to push notifications
      const registration = await navigator.serviceWorker.register('/sw.js');
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY' // We'll set this up later
      });

      // Send subscription to our server
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
      });

      alert('✅ Daily notifications enabled! You\'ll receive the dashboard at 5:30 AM PST.');
    } else {
      alert('Notification permission denied');
    }
  };

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
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', color: '#fff' }} />
              <Line type="monotone" dataKey="total" stroke="#e31937" strokeWidth={3} dot={{ fill: '#e31937', r: 4 }} />
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

      {/* Enable Notifications Button */}
      <div className="card p-5 mb-4">
        <button 
          onClick={enableNotifications}
          disabled={notificationsEnabled}
          className="w-full py-3 bg-[#e31937] text-white rounded-2xl font-medium disabled:bg-gray-600"
        >
          {notificationsEnabled ? '✅ Daily Notifications Enabled' : 'Enable Daily 5:30 AM Notifications'}
        </button>
        <p className="text-xs text-gray-400 text-center mt-2">
          Get the dashboard delivered automatically every morning
        </p>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-4">
        v2.2 • Push notifications enabled • 5:30 AM PST
      </div>
    </div>
  );
}
