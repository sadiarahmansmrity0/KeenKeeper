"use client";
import { InterectionsContext } from '@/context/installcontext';
import React, { useContext, useEffect, useState } from 'react';

const TimeLineCard = ({ sortType, search }) => {
    const { interections } = useContext(InterectionsContext);
    
    // 1. Initialize with an empty array to avoid server/client mismatch
    const [filteredList, setFilteredList] = useState([]);
    
    // 2. Track mounting to prevent hydration errors
    const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsMounted(true);
}, []);

    useEffect(() => {
        
        let updatedList = [...interections];

        // Search Filter Logic
        if (search) {
            updatedList = updatedList.filter((item) =>
                item.with.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sorting & Type Filter Logic
        if (sortType === "Date") {
            updatedList = updatedList.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
        } else if (sortType === "Call") {
            updatedList = updatedList.filter((item) => item.type === "Call");
        } else if (sortType === "Video") {
            updatedList = updatedList.filter((item) => item.type === "Video");
        } else if (sortType === "Text") {
            updatedList = updatedList.filter((item) => item.type === "Text");
        }

        setFilteredList(updatedList);

    }, [sortType, interections, search]);

    // Don't render anything on the server to ensure perfect hydration
    if (!isMounted) {
        return null; 
    }

    return (
        <div className="w-full">
            {filteredList.length > 0 ? (
                <div className="flex flex-col w-full gap-4 my-8">
                    {filteredList.map((interection, index) => (
                        <div 
                            className="px-6 py-8 rounded-lg shadow-sm flex items-center justify-between bg-white border border-gray-100" 
                            key={interection.id || index}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-full text-2xl">
                                    {interection.icon}
                                </div>
                                <div>
                                    <h1 className="text-lg font-medium text-gray-800">
                                        <span className="text-success font-bold capitalize">
                                            {interection.type}
                                        </span> 
                                        {" "}with {interection.with}
                                    </h1>
                                    <p className="text-sm text-gray-400">
                                        {new Date(interection.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center w-full gap-4 my-8 py-16 px-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50/50">
                    <div className="text-6xl grayscale opacity-50">empty</div>
                    <h1 className="text-2xl font-semibold text-gray-700">No Interactions Found</h1>
                    <p className="text-sm text-gray-500 text-center max-w-xs">
                        Try adjusting your filters or start a new conversation with a friend to fill your timeline.
                    </p>
                </div>
            )}
        </div>
    );
};

export default TimeLineCard;