import React from 'react';
import { useStorage } from '../StorageContext';
import SliderItem from './SliderItem';
import { Droplets, Leaf, Coffee, Sun, Moon, Zap } from 'lucide-react';

const DailyGrid = () => {
    const { data, updateValue } = useStorage();

    const meals = [
        { id: 'b', title: '早餐 (Breakfast)', icon: Coffee },
        { id: 'l', title: '午餐 (Lunch)', icon: Sun },
        { id: 'd', title: '晚餐 (Dinner)', icon: Moon },
        { id: 'f', title: '彈性 (Flexible)', icon: Zap },
    ];

    return (
        <div className="space-y-6 mt-4 pb-12 px-4">
            {meals.map((meal) => (
                <div key={meal.id} className="bg-gray-800/50 rounded-3xl p-6 border border-gray-700 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-gray-700/50">
                            <meal.icon size={20} className="text-purple-400" />
                        </div>
                        <h3 className="font-black text-gray-200 uppercase tracking-widest">{meal.title}</h3>
                    </div>

                    <div className="space-y-4">
                        <SliderItem
                            label="飲水量"
                            icon={Droplets}
                            colorClass="text-blue-400"
                            value={data[`${meal.id}_water`]}
                            onChange={(val) => updateValue(`${meal.id}_water`, val)}
                            max={4}
                        />
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2" />
                        <SliderItem
                            label="蔬菜量"
                            icon={Leaf}
                            colorClass="text-green-400"
                            value={data[`${meal.id}_veggie`]}
                            onChange={(val) => updateValue(`${meal.id}_veggie`, val)}
                            max={3}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DailyGrid;
