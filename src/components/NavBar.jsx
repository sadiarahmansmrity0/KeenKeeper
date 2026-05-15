"use client";
import { TfiStatsUp } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const path = usePathname();
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm flex justify-between px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-active  lg:hidden">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                            <li ><Link className={path == "/" ? "btn btn-success" : "btn btn-block"} href='/'>Home</Link></li>
                            <li ><Link className={path == "/timeline" ? "btn btn-success" : "btn btn-block"} href='/timeline'>TimeLine</Link></li>
                            <li ><Link className={path == "/stats" ? "btn btn-success" : "btn btn-block"} href='/stats'>Stats</Link></li>
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost normal-case text-xl text-black">Keen <span className="text-success">Keeper</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li ><Link className={path == "/" ? "btn btn-success" : "btn btn-block"} href='/'><FaHome />Home</Link></li>
                        <li ><Link className={path == "/timeline" ? "btn btn-success" : "btn btn-block"} href='/timeline'><RiTimeLine />TimeLine</Link></li>
                        <li ><Link className={path == "/stats" ? "btn btn-success" : "btn btn-block"} href='/stats'><TfiStatsUp />Stats</Link></li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default NavBar;