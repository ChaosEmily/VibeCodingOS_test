import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const WeeklyTrend = () => {
    // Mock data for the last 7 days including today
    const data = useMemo(() => {
        const result = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];

            // Try to get actual data from localStorage
            const saved = localStorage.getItem(`diet_tracker_${dateStr}`);
            const entry = saved ? JSON.parse(saved) : null;

            const totalWater = entry ? (entry.b_water + entry.l_water + entry.d_water + entry.f_water) : 0;
            const totalVeggie = entry ? (entry.b_veggie + entry.l_veggie + entry.d_veggie + entry.f_veggie) : 0;

            result.push({
                name: d.toLocaleDateString('zh-TW', { weekday: 'short' }),
                water: totalWater,
                veggie: totalVeggie,
            });
        }
        return result;
    }, []);

    return (
        <div className="bg-gray-800/50 rounded-3xl p-6 border border-gray-700 shadow-lg mt-8 mb-12">
            <h3 className="font-black text-gray-200 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                本週趨勢線 (Weekly Trend)
            </h3>

            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                        <XAxis
                            dataKey="name"
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#9CA3AF"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '12px' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                        />
                        <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} />
                        <Bar dataKey="water" name="水" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} />
                        <Bar dataKey="veggie" name="菜" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={12} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyTrend;
