"use client"
import { useContext } from "react";
import { InterectionsContext } from "@/context/installcontext";
import { MdArrowDropDown } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { useState } from "react";
import TimeLineCard from "@/components/TimeLineCard";
import { FaLongArrowAltRight } from "react-icons/fa";
const TimeLine = () => {



const { interections } = useContext(InterectionsContext);
const [search, setSearch] = useState('');
console.log(search);

const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
};

    const [sortType,setSortingType] = useState("All");
    

    return (
        <>
            <div className="bg-[#F8FAFC]">
                <section className="flex flex-col justify-center items-start w-8/12 mx-auto w-8/12 " >
                    <h1 className="my-4 text-5xl font-bold">TimeLine</h1>
                    <div className="flex justify-between items-center w-full">
                        <div className="dropdown dropdown-start my-4">
                            <div tabIndex={0} role="button" className="btn m-1 ">Filter TimeLine <FaLongArrowAltRight /> {sortType} <MdArrowDropDown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={()=>{setSortingType("All")}}>All</a></li>
                                <li><a onClick={()=>{setSortingType("Date")}}>Date</a></li>
                                <li><a onClick={()=>{setSortingType("Call")}}>Call</a></li>
                                <li><a onClick={()=>{setSortingType("Video")}}>Video</a></li>
                                <li><a onClick={()=>{setSortingType("Text")}}>Text</a></li>
                                
                            </ul>
                        </div>
                        <div>
                            <label className="input">
                                <MdManageSearch />
                                <input onChange={handleSearch} type="search" required placeholder="Search" />
                            </label>
                        </div>
                    </div>
                    <TimeLineCard sortType={sortType} search={search} />

                </section>

            </div>

        </>
    );
};

export default TimeLine;