<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retirement Portfolio Tracker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .card { background-color: #111; border: 1px solid #333; border-radius: 24px; }
    </style>
</head>
<body class="bg-[#0a0a0a] text-white">
    <div class="max-w-[480px] mx-auto min-h-screen p-5">
        
        <!-- Header -->
        <div class="mb-8 pt-2">
            <div class="text-[#e31937] text-xs tracking-[4px] font-medium">RETIREMENT TRACKER v2</div>
            <div class="text-4xl font-semibold tracking-[-1px] mt-1">Portfolio Dashboard</div>
            <div class="text-sm text-gray-400 mt-1">Updated just now • 5:30 AM PST daily</div>
        </div>

        <!-- Live TSLA -->
        <div class="card p-6 mb-6">
            <div class="flex justify-between items-start">
                <div>
                    <div class="text-xs text-gray-400 tracking-widest">LIVE TSLA</div>
                    <div class="text-7xl font-semibold tabular-nums tracking-tighter mt-2">$423.67</div>
                </div>
                <div class="text-right">
                    <div class="text-xs text-gray-400 tracking-widest">7-DAY</div>
                    <div class="text-3xl font-semibold text-emerald-400 mt-2">+1.26%</div>
                </div>
            </div>
        </div>

        <!-- Retirement Portfolio -->
        <div class="card p-6 mb-6">
            <div class="flex justify-between items-end mb-6">
                <div>
                    <div class="text-xs text-gray-400 tracking-widest">RETIREMENT PORTFOLIO</div>
                    <div class="text-6xl font-semibold tabular-nums tracking-tighter mt-1">$466,508</div>
                </div>
                <div class="text-right">
                    <div class="text-xs text-gray-400 tracking-widest">TO $5M GOAL</div>
                    <div class="text-4xl font-semibold text-[#e31937] mt-1">9.3%</div>
                </div>
            </div>

            <!-- Eric -->
            <div class="mb-5">
                <div class="flex justify-between text-sm mb-2">
                    <div>Eric</div>
                    <div class="font-medium tabular-nums">$302,085</div>
                </div>
                <div class="h-1.5 bg-[#222] rounded-full overflow-hidden">
                    <div class="h-1.5 bg-[#e31937] rounded-full" style="width: 6.0%"></div>
                </div>
                <div class="text-xs text-gray-400 mt-1 text-right">6.0% of goal</div>
            </div>

            <!-- Bridget -->
            <div>
                <div class="flex justify-between text-sm mb-2">
                    <div>Bridget</div>
                    <div class="font-medium tabular-nums">$164,423</div>
                </div>
                <div class="h-1.5 bg-[#222] rounded-full overflow-hidden">
                    <div class="h-1.5 bg-[#e31937] rounded-full" style="width: 3.3%"></div>
                </div>
                <div class="text-xs text-gray-400 mt-1 text-right">3.3% of goal</div>
            </div>
        </div>

        <!-- Historical Chart -->
        <div class="card p-6 mb-6">
            <div class="text-xs text-gray-400 tracking-widest mb-4">PORTFOLIO GROWTH (LAST 5 MONTHS)</div>
            <div class="text-center text-gray-400 text-sm py-8">
                [Beautiful line chart will appear here]
            </div>
        </div>

        <!-- Jensen -->
        <div class="card p-6">
            <div class="flex justify-between items-center">
                <div>
                    <div class="text-xs text-gray-400 tracking-widest">JENSEN (Education / Future)</div>
                    <div class="text-4xl font-semibold tabular-nums mt-2">$21,932</div>
                </div>
                <div class="text-xs text-gray-500 text-right">Not included<br>in $5M goal</div>
            </div>
        </div>

        <div class="text-center text-[10px] text-gray-500 mt-10 tracking-widest">
            v2.4 • Auto-updates on open • 5:30 AM PST
        </div>
    </div>
</body>
</html>
