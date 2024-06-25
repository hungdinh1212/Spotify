import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiBadgeCheck } from "react-icons/bi";

export default function Header({ name }) {
  const handleBack = () => {
    window.history.back();
  };
  const handleNext = () => {
    history.push('/next-page');
  };
  return (
    <>
      <div className='bg-[#121212] mt-2 rounded-t-xl'>
        {/* style={{ backgroundImage: `url(${artists[0].bg})` }} */}
        <div className="flex justify-between w-full h-[9%] items-center p-3 ">
          <div className="text-[#353333] text-3xl flex gap-1 " role="button">
            <IoIosArrowDropleft className='text-white' onClick={handleBack} />
            <IoIosArrowDropright className='text-white' onClick={handleNext} />
          </div>
          <div className="flex gap-2">
            <Link
              to="/signup/step1"
              className="rounded-full text-gray-500  px-8 py-1 bg:none active:bg-white font-semibold "
            >
              Đăng ký{" "}
            </Link>
            <Link
              to="/signin"
              className="rounded-full text-black px-8 py-1 bg-white font-semibold h-[5%]"
            >
              Đăng nhập
            </Link>
          </div>
        </div>

        <div className="mt-10 gap-8 flex  md:flex-row md:items-center text-white z-0">
          <div className='flex flex-col ml-3 pb-7'>

            <p className='flex gap-2'><BiBadgeCheck className='bg-blue-800 rounded-full' />Nghệ sĩ được xác minh</p>
            <p className='text-9xl font-bold'>{name}</p>

          </div>
        </div>
      </div>
    </>
  )
}
