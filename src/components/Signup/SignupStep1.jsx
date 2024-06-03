import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

import "../../css/Signup.css";
import { useRef, useState } from "react";

// import { useState } from "react";
export default function SignupStep1() {
  const [email, setEmail] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isEvent, setEvent] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEvent(true);
    setIsValidate(validateEmail(emailValue));
  };
  const handleChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidate(validateEmail(emailValue));
  };

  const handleClickNext = () => {
    if (isValidate) {
      navigate("/signup/step2");
    } else {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        <main>
          <header className="h-8 p-8">
            <Link to="/">
              <img className="w-28 h-8" src={assets.logoWhite} alt="Logo" />
            </Link>
          </header>
          <section className="flex justify-center w-full">
            <div className="wrapH1">
              <header className="mb-10">
                <h1 className="text-5xl font-bold text-white">
                  Sign up to start listening
                </h1>
              </header>
              <form>
                <div className="w-full font-bold">
                  <label className="text-white text-sm">Email address</label>
                  <div className="pt-2">
                    <input
                      ref={inputRef}
                      className={`signupInput ${
                        isEvent && !isValidate ? "error" : ""
                      }`}
                      id="idEmail"
                      type="email"
                      placeholder="example@email.com"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {isEvent && !isValidate && (
                      <div className="text-sm text-red-600 flex mt-2">
                        <svg
                          className="fill-current w-7 h-7 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6C6.189 21.6 2.4 17.811 2.4 12S6.189 2.4 12 2.4 21.6 6.189 21.6 12 17.811 21.6 12 21.6zM12 5.4a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 0 0 2.4 0V6.6A1.2 1.2 0 0 0 12 5.4zm0 9.6a1.2 1.2 0 0 0-1.2 1.2v.006a1.2 1.2 0 0 0 2.4 0V16.2A1.2 1.2 0 0 0 12 15z" />
                        </svg>
                        <span className="text-sm">
                          This email is invalid. Make sure it is written like
                          example@email.com
                        </span>
                      </div>
                    )}
                    <div className="mt-2 text-green-500 underline text-sm">
                      <a href="">Use phone number instead.</a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClickNext}
                  type="button"
                  className="buttonSignup"
                >
                  <span>Next</span>
                </button>
              </form>
              <div className="my-8">
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="mx-2 text-gray-500">or</span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="my-8">
                  <a className="buttonGoogle">
                    <span>
                      <svg
                        className="-ml-1"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1 12.2272C22.1 11.5182 22.0364 10.8363 21.9182 10.1818H12.5V14.05H17.8818C17.65 15.3 16.9455 16.3591 15.8864 17.0682V19.5772H19.1182C21.0091 17.8363 22.1 15.2727 22.1 12.2272Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12.4998 21.9999C15.1998 21.9999 17.4635 21.1045 19.118 19.5772L15.8862 17.0681C14.9907 17.6681 13.8453 18.0227 12.4998 18.0227C9.89529 18.0227 7.69075 16.2636 6.90439 13.8999H3.56348V16.4908C5.20893 19.759 8.59075 21.9999 12.4998 21.9999Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M6.90455 13.9C6.70455 13.3 6.59091 12.6591 6.59091 12C6.59091 11.3409 6.70455 10.7 6.90455 10.1V7.50909H3.56364C2.88636 8.85909 2.5 10.3864 2.5 12C2.5 13.6136 2.88636 15.1409 3.56364 16.4909L6.90455 13.9Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12.4998 5.97727C13.968 5.97727 15.2862 6.48182 16.3226 7.47273L19.1907 4.60455C17.4589 2.99091 15.1953 2 12.4998 2C8.59075 2 5.20893 4.24091 3.56348 7.50909L6.90439 10.1C7.69075 7.73636 9.89529 5.97727 12.4998 5.97727Z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                    </span>
                    <span>Sign up with Google</span>
                  </a>
                  <a className="buttonFacebook mt-2">
                    <span>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12.5" cy="12" r="10" fill="white"></circle>
                        <path
                          d="M22.5 12C22.5 6.477 18.023 2 12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 16.991 6.157 21.128 10.938 21.878V14.891H8.398V12H10.938V9.797C10.938 7.291 12.43 5.907 14.715 5.907C15.808 5.907 16.953 6.102 16.953 6.102V8.562H15.693C14.45 8.562 14.063 9.333 14.063 10.125V12H16.836L16.393 14.89H14.063V21.878C18.843 21.128 22.5 16.991 22.5 12Z"
                          fill="#1877F2"
                        ></path>
                      </svg>
                    </span>
                    <span>Sign up with FaceBook</span>
                  </a>
                  <a className="buttonApple mt-2">
                    <span className="-ml-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.195 4.513C15.873 3.69 16.351 2.567 16.351 1.433C16.351 1.278 16.341 1.123 16.318 1C15.206 1.044 13.872 1.734 13.083 2.668C12.449 3.379 11.871 4.513 11.871 5.647C11.871 5.825 11.905 5.991 11.916 6.047C11.982 6.058 12.094 6.08 12.216 6.08C13.206 6.08 14.45 5.413 15.195 4.513ZM15.973 6.313C14.317 6.313 12.961 7.325 12.093 7.325C11.171 7.325 9.97 6.38 8.525 6.38C5.779 6.38 3 8.648 3 12.918C3 15.586 4.023 18.398 5.301 20.211C6.391 21.744 7.347 23 8.725 23C10.081 23 10.682 22.1 12.371 22.1C14.083 22.1 14.472 22.978 15.973 22.978C17.463 22.978 18.453 21.61 19.397 20.265C20.442 18.72 20.887 17.219 20.897 17.142C20.809 17.119 17.963 15.952 17.963 12.695C17.963 9.871 20.198 8.604 20.331 8.504C18.852 6.381 16.596 6.314 15.973 6.314V6.313Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span>Sign up with Apple</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center my-4 mt-8">
                <div className="flex-grow border-t border-gray-600"></div>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>
              <p className=" font-normal mt-8 text-gray-400 text-center">
                Already have an account?{" "}
                <a
                  className="text-white underline "
                  href="https://accounts.spotify.com?creation_point=https%3A%2F%2Fopen.spotify.com%2F%3Fsp_cid%3Dfe3fa7a5579c23386587c5d1026c2d16%26device%3Ddesktop&amp;continue=https%3A%2F%2Fopen.spotify.com%2F%3Fflow_ctx%3D5c0ec16e-2d84-48d1-bdff-4c63106e1a4c%253A1717365198&amp;flow_ctx=5c0ec16e-2d84-48d1-bdff-4c63106e1a4c%3A1717365198"
                >
                  Log in here
                </a>
              </p>
            </div>
          </section>
        </main>
        <footer className="footerSignup flex-col">
          <span>
            This site is protected by reCAPTCHA and the Google <br></br>
            <u>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </u>
            &nbsp;and
            <u>
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Terms of Service
              </a>
            </u>
            apply.
          </span>
        </footer>
      </div>
    </>
  );
}
