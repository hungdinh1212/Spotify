
import React from 'react'
import { assets } from '../assets/assets.js';
import '../css/Signin.css'
import GoogleLogo from '../assets/GoogleLogo.jsx'
function Signin() {
    return (
        <>
            <div className=' py-10'>
                <div className='signin py-10 text-center w-1/2 mx-auto rounded-xl text-white'>
                    <div className='logo'>
                        <img className='mx-auto' src={assets.logoWhite} width={110}></img>
                    </div>
                    <h1 className='text-white text-3xl my-12 font-semibold mx-auto'>
                        Login to  Spotify
                    </h1>

                    <form className='text-center mx-auto w-1/2'>
                        <div className='w-full text-left py-4 pt-0.5'>

                            <input value="Tiếp tục bằng Google" className='block w-full h-10 outline-none outline-white p-3 hover:scale-105
                             hover:font-semibold translate-all duration-200 font-semibold text-white text-center rounded-full'></input>
                        </div>
                        <div className='w-full text-left py-4 pt-0.5'>
                            <input value="Tiếp tục bằng Facebook" className='block w-full h-10  outline-none outline-white p-3 hover:scale-105
                             hover:font-semibold translate-all duration-200 font-semibold text-white text-center rounded-full'></input>
                        </div>
                        <div className='w-full text-left py-4 pt-0.5'>
                            <input value="Tiếp tục bằng Apple" className='block w-full h-10  outline-none outline-white p-3 hover:scale-105
                             hover:font-semibold translate-all duration-200 font-semibold text-white text-center rounded-full'></input>
                        </div>
                        <div className='w-full text-left py-4 pt-0.5'>
                            <input value="Tiếp tục bằng số điện thoại" className='block w-full h-10  outline-none outline-white p-3 hover:scale-105
                             hover:font-semibold translate-all duration-200 font-semibold text-white text-center rounded-full'></input>
                        </div>

                        <hr class="my-4 h-2 border-gray-400 opacity-75 " />

                        <div className='w-full text-left'>
                            <label htmlFor='email' className='font-medium inline-block my-4'>Email or username</label>
                            <input placeholder='Username or email' id='email' name='email' className='h-10 block w-full rounded-md border-0 outline-none outline-gray-400 text-gray-900 hover:outline-white
                             focus:ring-[3px] focus:ring-inset pl-4'></input>
                        </div>
                        <div className='w-full text-left'>
                            <label htmlFor='password' className='font-medium inline-block my-4'>Password</label>
                            <input placeholder='Password' id='password' name='password' className='h-10 block w-full rounded-md border-0 outline-none outline-gray-400 text-gray-900 hover:outline-white
                             focus:ring-[3px] focus:ring-inset pl-4'></input>
                        </div>
                        <div className='toggle'>
                            <label class="switch">
                                <input type="checkbox" />
                                <span className="slider round"><span className='p-16 text-xxs'>Remember</span></span>

                            </label>
                        </div>
                        <div className='w-full text-left py-4 my-10'>
                            <input placeholder='Password' id='password' name='password' value="Log in" className='block w-full outline-none p-3 hover:scale-105
                             hover:font-semibold translate-all duration-200 bg-green-600 text-black text-center rounded-full'></input>
                        </div>


                        <div className='forgot password'>
                            <p className='underline text-white text-center font-semibold my-10'>Quên mật khẩu của bạn ?</p>
                            <hr class="my-4 h-2 border-gray-400 opacity-75" />
                        </div>
                        <div>
                            <p>Bạn chưa có tài khoản ? <b className='underline'>Đăng kí ngay.</b></p>
                        </div>


                    </form>


                </div>

            </div>
            <footer className='text-gray-400 text-center h-28 mt-10'>
                <div class="items-center">
                    <p className='text-center'>Trang web này được bảo vệ bằng reCAPTCHA và tuân theo <span className='underline'>Chính sách và quyền riêng tư</span> cũng như <span className='underline'>Điều khoản dịch vụ</span> của Google</p>
                </div>
            </footer>

        </>
    );
};
export default Signin;