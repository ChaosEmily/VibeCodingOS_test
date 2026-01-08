import React from 'react';
import { useStorage } from '../StorageContext';
import { Droplets, Leaf } from 'lucide-react';

const StatsHeader = () => {
    const { stats } = useStorage();
    const waterGoal = 6;
    const veggieGoal = 4;

    const isWaterDone = stats.totalWater >= waterGoal;
    const isVeggieDone = stats.totalVeggie >= veggieGoal;

    return (
        <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md p-6 border-b border-gray-800 rounded-b-3xl shadow-2xl">
            <div className="flex justify-between items-center gap-4">
                <div className={`flex-1 p-4 rounded-2xl bg-gray-800 border-2 transition-all duration-500 ${isWaterDone ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-transparent'}`}>
                    <div className="flex items-center gap-2 mb-1">
                        <Droplets className={isWaterDone ? 'text-blue-400' : 'text-gray-400'} size={20} />
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">每日飲水</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-black ${isWaterDone ? 'text-blue-400' : 'text-white'}`}>
                            {stats.totalWater}
                        </span>
                        <span className="text-gray-500 font-medium">/ {waterGoal}</span>
                    </div>
                </div>

                <div className={`flex-1 p-4 rounded-2xl bg-gray-800 border-2 transition-all duration-500 ${isVeggieDone ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'border-transparent'}`}>
                    <div className="flex items-center gap-2 mb-1">
                        <Leaf className={isVeggieDone ? 'text-green-400' : 'text-gray-400'} size={20} />
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">每日蔬菜</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-black ${isVeggieDone ? 'text-green-400' : 'text-white'}`}>
                            {stats.totalVeggie}
                        </span>
                        <span className="text-gray-500 font-medium">/ {veggieGoal}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsHeader;
