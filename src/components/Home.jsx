import React from 'react';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Home = () => {
    return (
        <>
            <div className="flex justify-between w-full p-1 bg-[#121212] rounded mt-2">
                <div className="flex justify-between w-full h-[5%] items-center mx-3">
                    <div className="text-gray-300 text-3xl flex" role="button">
                        <IoIosArrowDropleft />
                        <IoIosArrowDropright />
                    </div>
                    <div className="flex gap-2">
                        <button className="rounded-full text-black mt-4 px-8 py-1 bg-white font-semibold h-[5%]">Đăng ký </button>
                        <button className="rounded-full text-black mt-4 px-8 py-1 bg-white font-semibold h-[5%]">Đăng nhập</button>
                    </div>
                </div>

            </div>

        </>
    );
};
export default Home;