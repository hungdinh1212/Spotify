// import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Player from "./Player";
import Card from "./Card";
const Home = () => {
  return (
    <Layout>
      <div className="flex-cols justify-between  h-full bg-[#121212] rounded mt-2">
        <div className="flex justify-between w-full h-[9%] items-center  bg-[#0d0d0d] p-3 ">
          <div className="text-[#353333] text-3xl flex gap-1 " role="button">
            <IoIosArrowDropleft />
            <IoIosArrowDropright />
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
        <h2 className="text-white font-bold leading-7 text-3xl p-6">Nghệ sĩ</h2>
        <div className="flex w-full gap-9">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
      </div>
    </Layout>
  );
};
export default Home;
