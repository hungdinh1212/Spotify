import React from 'react'
import '../css/Signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="signup-bar rounded-lg bottom-0 fixed p-3 flex justify-between flex-wrap items-center">
      <div>
        <p className="mb-2 text-sm">Xem trước Spotify</p>
        <p className="text-md">Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên, Không cần thẻ tín dụng.</p>
      </div>
      <Link to="/register" className="signup-btn ml-3 text-black bg-white rounded-full p-1 font-bold w-[10%] h-[80%] text-center ">Đăng ký miễn phí</Link>

    </div>
  )
}
export default Signup;