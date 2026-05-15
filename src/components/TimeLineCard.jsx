
import { InterectionsContext } from '@/context/installcontext';
import React, { useContext, useEffect, useState } from 'react';

const TimeLineCard = ({ sortType, search }) => {
    const { interections } = useContext(InterectionsContext);
    const [filteredList, setFilteredList] = useState(interections);
    console.log(search);

    useEffect(() => {
        let updatedList = [...interections];


        if (search) {
            updatedList = updatedList.filter((item) =>
                item.with.toLowerCase().includes(search.toLowerCase())
            );
        }

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


    return (
        <>

            {filteredList.length > 0 ? (
                <div className="flex flex-col w-full gap-4 my-8">
                    {filteredList.map((interection, index) => (
                        <div className="px-3 py-10 rounded-lg shadow flex items-start bg-white" key={interection.id || index}>
                            <div className="flex items-center gap-1">
                                <div>
                                    {interection.icon}
                                </div>
                                <div>
                                    <h1 className="flex justify-center items-center gap-2"><span className="text-success text-lg font-semibold">{interection.type}</span>with{interection.with}</h1>
                                    <p>{interection.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full gap-4 my-8 py-10 px-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                    <div className="text-5xl opacity-70">💬</div>
                    <h1 className="text-2xl font-semibold text-gray-800">No Interactions</h1>
                    <p className="text-sm text-gray-500 text-center max-w-xs">
                        You haven’t had any interactions yet. Start engaging to see activity here.
                    </p>
                </div>
            )
            }

        </>
    );
};

export default TimeLineCard;