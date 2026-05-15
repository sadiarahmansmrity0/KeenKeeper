import FriendsCardRender from "@/components/FriendsCardRender";
import Image from "next/image";
import { Suspense } from "react";
import { TiPlus } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <section className="w-8/12 mx-auto ">
          <div className="text-center my-8 flex flex-col gap-4">
            <h1 className=" text-black text-4xl font-bold ">Friends to keep close in your life</h1>
            <p className="text-black text-lg font-extralight w-1/2 mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
              relationships that matter most.</p>
            <button className="btn btn-success  mx-auto"> <TiPlus />Add Friend</button>
          </div>
        </section>
        <section className="w-8/12 mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 my-8">
          <div className="px-3 py-10 rounded-lg shadow flex flex-col text-center bg-white "><h1 className="text-3xl font-bold text-success">10</h1> <p className="text-gray-400">Total Friends</p></div>
          <div className="px-3 py-10 rounded-lg shadow flex flex-col text-center bg-white "><h1 className="text-3xl font-bold text-success">2</h1> <p className="text-gray-400">On Track</p></div>
          <div className="px-3 py-10 rounded-lg shadow flex flex-col text-center bg-white "><h1 className="text-3xl font-bold text-success">2</h1> <p className="text-gray-400">Need Attention</p></div>
          <div className="px-3 py-10 rounded-lg shadow flex flex-col text-center bg-white "><h1 className="text-3xl font-bold text-success">5</h1> <p className="text-gray-400">Interaction This Month</p></div>

        </section>
        <section className="w-8/12 mx-auto text-center">
        <Suspense fallback={<span className=" loading loading-spinner text-success"></span>}>
        <FriendsCardRender />
        </Suspense>
        </section>
      </div>

    </>
  );
}
