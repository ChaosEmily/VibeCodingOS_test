import React, { createContext, useContext, useState, useEffect } from 'react';

const StorageContext = createContext();

const INITIAL_DATA = {
    b_water: 0, b_veggie: 0,
    l_water: 0, l_veggie: 0,
    d_water: 0, d_veggie: 0,
    f_water: 0, f_veggie: 0,
};

export const StorageProvider = ({ children }) => {
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    // Load data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(`diet_tracker_${date}`);
        if (saved) {
            setData(JSON.parse(saved));
        } else {
            setData(INITIAL_DATA);
        }
        setLoading(false);
    }, [date]);

    // Update logic
    const updateValue = (key, value) => {
        const newData = { ...data, [key]: value };
        setData(newData);
        localStorage.setItem(`diet_tracker_${date}`, JSON.stringify(newData));
    };

    // Derived stats
    const stats = {
        totalWater: data.b_water + data.l_water + data.d_water + data.f_water,
        totalVeggie: data.b_veggie + data.l_veggie + data.d_veggie + data.f_veggie,
    };

    return (
        <StorageContext.Provider value={{ data, updateValue, stats, loading, date, setDate }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = () => useContext(StorageContext);
