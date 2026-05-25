export default function RetirementDashboard() {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-[#0a0a0a] p-5 text-white">
      
      <div className="mb-8 pt-2">
        <div className="text-[#e31937] text-xs tracking-[4px] font-medium">RETIREMENT TRACKER v2</div>
        <div className="text-4xl font-semibold tracking-[-1px] mt-1">Portfolio Dashboard</div>
      </div>

      <div className="bg-[#111] border border-[#333] rounded-3xl p-6 mb-6">
        <div className="text-xs text-gray-400 tracking-widest">LIVE TSLA</div>
        <div className="text-7xl font-semibold tabular-nums tracking-tighter mt-2">$423.67</div>
        <div className="text-3xl font-semibold text-emerald-400 mt-1">+1.26% (7-day)</div>
      </div>

      <div className="bg-[#111] border border-[#333] rounded-3xl p-6 mb-6">
        <div className="text-xs text-gray-400 tracking-widest">RETIREMENT PORTFOLIO</div>
        <div className="text-6xl font-semibold tabular-nums tracking-tighter mt-1">$466,508</div>
        <div className="text-4xl font-semibold text-[#e31937] mt-1">9.3% to $5M goal</div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between"><div>Eric</div><div className="font-medium">$302,085</div></div>
          <div className="flex justify-between"><div>Bridget</div><div className="font-medium">$164,423</div></div>
        </div>
      </div>

      <div className="bg-[#111] border border-[#333] rounded-3xl p-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400 tracking-widest">JENSEN (Education / Future)</div>
            <div className="text-4xl font-semibold tabular-nums mt-2">$21,932</div>
          </div>
          <div className="text-xs text-gray-500 text-right">Not included in $5M goal</div>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-10 tracking-widest">
        v2.4 • Auto-updates on open • 5:30 AM PST
      </div>
    </div>
  );
}
