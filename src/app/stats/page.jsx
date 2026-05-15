"use client"
import { InterectionsContext } from "@/context/installcontext";
import { useContext } from "react";
import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";

const StatsManager = () => {
    const { interections } = useContext(InterectionsContext);
    const call = interections.filter((i) => i.type === "Call");
    const video = interections.filter((i) => i.type === "Video");
    const text = interections.filter((i) => i.type === "Text");

    const data = [
        { name: 'Call',  value: call.length,  fill: '#00C49F' },
        { name: 'Video', value: video.length, fill: '#FFBB28' },
        { name: 'Text',  value: text.length,  fill: '#FF8042' },
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <section className="flex flex-col justify-center items-center w-11/12 sm:w-9/12 md:w-8/12 mx-auto">
                <div className="text-2xl font-bold text-black my-8 w-full">
                    <h1>FriendShip Analytics</h1>
                </div>

                <div className="bg-white rounded-lg w-full flex flex-col justify-center items-center my-10 py-6 shadow-sm">
                    <h1 className="text-start w-full mb-4 px-4 text-2xl font-bold text-gray-400">
                        PieChart View
                    </h1>

                    {/* ✅ ResponsiveContainer fixes the Vercel SSR + sizing issue */}
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#1F2937',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                }}
                            />
                            <Pie
                                data={data}
                                innerRadius="60%"
                                outerRadius="80%"
                                cornerRadius={6}
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Legend */}
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm mt-6">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-[#00C49F]" />
                            <span className="text-[#00C49F] font-medium">Call</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-[#FF8042]" />
                            <span className="text-[#FF8042] font-medium">Text</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-[#FFBB28]" />
                            <span className="text-[#FFBB28] font-medium">Video</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatsManager;