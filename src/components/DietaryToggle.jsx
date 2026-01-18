import React from 'react';

const DietaryToggle = ({ currentFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'veg', label: 'Veg Only', icon: '🟢' },
        { id: 'non-veg', label: 'Non-Veg', icon: '🔴' },
    ];

    return (
        <div className="flex justify-center mb-10">
            <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 flex gap-2 relative z-0">
                {filters.map((filter) => {
                    const isActive = currentFilter === filter.id;
                    return (
                        <button
                            key={filter.id}
                            onClick={() => onFilterChange(filter.id)}
                            className={`
                relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 z-10
                ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900'}
              `}
                        >
                            {/* Background Pill for Active State - Transition opacity/scale for smoothness */}
                            <div
                                className={`absolute inset-0 bg-brand-red rounded-full -z-10 transition-all duration-300 ease-out origin-center
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                `}
                            />

                            {filter.icon && <span className="text-xs">{filter.icon}</span>}
                            {filter.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DietaryToggle;
