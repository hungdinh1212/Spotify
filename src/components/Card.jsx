import { assets } from "../assets/assets";
import "../css/Card.css"
import { FaPlayCircle } from "react-icons/fa";
const Card = () => {
    return (
        <div className="card col-span-1 rounded-lg h-72 flex flex-col justify-between">
            <img className=" rounded-full w-full p-3 " src={assets.SonTungMTP} alt="placeholder">
            </img>
            <button className="play-button absolute mt-40 ml-40 rounded-3xl">
                <FaPlayCircle />
            </button>

            <h3 className="text-lg font-semibold text-white pl-3 ">Sơn Tùng MTP</h3>
            <p className="text-xs text-gray-400 pb-2 font-semibold pl-3">Nghệ sĩ</p>
        </div>


    );
};
export default Card;