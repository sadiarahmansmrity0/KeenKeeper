"use client";
import Link from "next/link";
import { use, useContext } from "react";
import useHooks from "@/hooks/useHooks";
import { InterectionsContext } from "@/context/installcontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import { addToLocalDB } from "@/utils/localDB";
import { getAllFromLocalDB } from "@/utils/localDB";

const FriendsData = ({ params }) => {
  const {loading, friends } = useHooks();
  const { useId } = use(params);
const {interections, setInterections} =useContext(InterectionsContext);


 
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">{loading && <span className=" loading loading-spinner text-success"></span>}</div>
    );
  }

  const user = friends.find(friend => friend.id === parseInt(useId));

const handleInterections = (label) => {
  toast.success(`${label} has been send to ${user.name} `, {
position: "top-center",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
const newInterection ={ type: label, with: user.name, icon: label==="Text" ? "💬" : label==="Meetup" ? "🤝" : "🎥", desc: user.why_contact, date: new Date().toLocaleDateString() };
addToLocalDB(newInterection);
setInterections(getAllFromLocalDB());
};
const sharedStyle = " text-white rounded-full px-3 py-1 text-sm font-medium";

  return (
    <>
      <div key={user.name} className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-slate-200">
                <img
                  src={user.picture}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">{user.name}</h2>
              <div className="flex gap-2 mt-2 mb-3 flex-col">
                <span
                                className={`${sharedStyle} ${user.status === "overdue"
                                        ? "bg-red-600"
                                        : user.status === "on-track"
                                            ? "bg-green-900"
                                            : "bg-yellow-500"
                                    }`}
                            >
                                {user.status}
                            </span>

                {

                  user.tags.map((tag, index) => (
                    <span key={index} className=" bg-gradient-to-r from-green-900 to-emerald-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))
                }

              </div>
              <p className="text-sm text-slate-500 italic">{user.relationship_detail}</p>
              <p className="text-xs text-slate-400 mt-1">Preferred: {user.email}</p>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
              <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <span>🔔</span> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <span>📁</span> Archive
              </button>
              <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                <span>🗑️</span> Delete
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-800">{user.days_since_contact}</p>
                <p className="text-xs text-slate-400 mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-800">{user.goal}</p>
                <p className="text-xs text-slate-400 mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <p className="text-lg font-bold text-slate-800 leading-tight">{user.next_due_date}</p>
                <p className="text-xs text-slate-400 mt-1">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-700">Relationship Goal</h3>
                <button className="text-xs border border-slate-200 px-3 py-1 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                  Edit
                </button>
              </div>
              <p className="text-sm text-slate-500">
                Connect every <span className="font-bold text-slate-800">{user.goal} days</span>
              </p>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Call", icon: "📞" },
                  { label: "Text", icon: "💬" },
                  { label: "Video", icon: "🎥" },
                ].map(({ label, icon }) => (
                  <button onClick={()=>{handleInterections(label)}}
                    key={label}
                    className="flex flex-col items-center gap-2 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm text-slate-600 font-medium"
                  >
                    <span className="text-xl">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Interactions */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Recent Interactions</h3>
                <button className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors">
                  ↺ Full History
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {interections.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-700">{item.type}</p>
                      <p className="text-xs text-slate-400 truncate">{item.with}</p>
                      <p className="text-xs text-slate-400 truncate">{item.desc}</p>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>







    </>
  );
};

export default FriendsData;