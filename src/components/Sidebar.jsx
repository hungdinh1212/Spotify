// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { assets } from "../assets/assets";
import { FaPlus } from "react-icons/fa6";
import { BiLibrary } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-full p-2 flex-col gap-2 text-white hideen lg-flex ">
      <div className="bg-[#121212] h-32 rounded-xl flex flex-col justify-around">
        <div className="flex item-center gap-3 pl-7 cursor-pointer">
          <img src={assets.logoWhite} alt="logo" className="w-[25%] h-9 p-1" />
        </div>
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <GoHomeFill className="text-2xl" />
          <span className="text-white">Trang chủ</span>
        </div>
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <IoSearchOutline className="text-2xl" />
          <span className="text-white">Tìm kiếm</span>
        </div>
      </div>
      <div className="bg-[#121212] h-[75%] rounded-xl mt-2">
        <div className="p-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 pl-4 cursor-pointer"
            title="Thu gọn thư viện"
          >
            <BiLibrary className="text-2xl" />
            <p className="font-semibold">Thư viện</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPlus className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col justify-start gap-1 pl-4">
          <h1>Tạo danh sách đầu tiên của bạn</h1>
          <p>Rất dễ ! chúng tôi sẽ giúp bạn</p>
          <button className="px-3 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 w-52 ">
            Tạo danh sách phát
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col justify-start gap-1 pl-4 mt-7">
          <h1>Hãy cùng tìm và theo dõi một số podcast</h1>
          <p>Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới</p>
          <button className="px-3 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 w-52 ">
            Duyệt xem podcast
          </button>
        </div>
        <div className="py-16 flex px-4 flex-wrap gap-4">
          <a className="text-xs text-gray-200 px-4 " href="">
            Pháp lý
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Trung tâm an toàn và quyền riêng tư
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Chính sách quyền riêng tư
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Cookie
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Giới thiệu Quảng cáo
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Hỗ trợ tiếp cận
          </a>
          <a className="text-xs text-gray-200 px-4" href="">
            Cookie
          </a>
        </div>
        <div className="p-9">
          <button className=" px-3 p-1 flex gap-2 border-white border rounded-full">
            <TbWorld className="text-xl" />
            <span className="text-xs items-baseline">Tiếng Việt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

// <Signup signupId={signupId} />
