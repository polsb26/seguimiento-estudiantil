"use client"
import Link from 'next/link';
import NavLinks from '@/src/components/manage/nav-links';
import { VscSignOut } from "react-icons/vsc";
import Image from "next/image";
import logoU from "@/app/assets/img/logos/logoU.png";
import axios from 'axios';
export default function SideNav() {
    const logout = async () => {
        const res = await axios.post('/api/logout')
        if (res.status === 200) {
            window.location.reload()
        }
    }
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-center justify-center rounded-md nav-color-bg  p-4 md:h-40"
                href=""
            >
                <div className="w-32 text-white md:w-40  ">
                    <Image
                        src={logoU}
                        alt="logo Universidad"
                        width={200}

                    />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button onClick={logout} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <VscSignOut size={25} />
                        <div className="hidden md:block ">Cerrar Sesion</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
