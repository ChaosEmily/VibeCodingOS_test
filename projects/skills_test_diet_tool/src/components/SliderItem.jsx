import React from 'react';

const SliderItem = ({ label, icon: Icon, value, onChange, max = 5, colorClass }) => {
    return (
        <div className="flex flex-col gap-3 py-2">
            <div className="flex justify-between items-center text-sm font-bold">
                <div className="flex items-center gap-2 text-gray-300">
                    <Icon size={16} className={colorClass} />
                    <span>{label}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs bg-gray-700 ${colorClass}`}>
                    {value} 單位
                </span>
            </div>
            <input
                type="range"
                min="0"
                max={max}
                step="1"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className={`w-full h-3 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-current ${colorClass}`}
                style={{ color: colorClass.includes('blue') ? '#3b82f6' : '#22c55e' }}
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-medium uppercase tracking-tighter">
                <span>0</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default SliderItem;
