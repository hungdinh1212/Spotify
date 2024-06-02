import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../../css/Signup.css";
import { useRef, useState } from "react";

const SignupStep2 = () => {
  const [password, setPassword] = useState("");
  const [hasLetter, setHasLetter] = useState(false);
  const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const handleBlur = (e) => {
    const value = e.target.value;
    setPassword(value);
    const letter = /[A-Za-z]/.test(value);
    const numberOrSpecialChar = /[\d#?!&@]/.test(value);
    const minLength = value.length >= 10;
    setHasLetter(letter);
    setHasNumberOrSpecialChar(numberOrSpecialChar);
    setHasMinLength(minLength);
    setIsBlur(true);
    setIsValidate(letter && numberOrSpecialChar && minLength);
  };
  const handleClickNext = () => {
    if (isValidate) {
      navigate("/signup/step3");
    } else {
      inputRef.current.focus();
    }
  };
  return (
    <div className="flex flex-col">
      <header className="h-8  p-8">
        <Link to="/">
          <img className="w-28 h-8" src={assets.logoWhite} alt="Logo"></img>
        </Link>
      </header>
      <section className="flex justify-center w-full mt-8 flex-grow">
        <div className="wrapH1">
          <form>
            <div className=" -mx-14">
              <div className="wraptienTrinh">
                <div className="tienTrinh3333" aria-valuenow={33.3333}></div>
              </div>
              <div className="flex mt-4 ">
                <Link to="/signup/step1">
                  <button>
                    <svg
                      height="28px"
                      width="28px"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="grey"
                      className=""
                    >
                      <polygon points="24.64,9.98 22.26,7.98 11.2,18 11.2,18 11.2,18 22.26,28.02 24.64,25.62 15.86,18" />
                    </svg>
                  </button>
                </Link>

                <div className="flex flex-col ml-4">
                  <span className="text-gray-400 font-normal">Step 1 of 3</span>
                  <span className="text-white font-bold">
                    Create a password
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full font-bold mt-4">
              <label className="text-white text-sm font-bold">Password</label>
              <div className="pt-2">
                <div>
                  <div className="relative">
                    <div>
                      <input
                        ref={inputRef}
                        className={`signupInput relative ${
                          isBlur && !isValidate ? "error" : ""
                        }`}
                        id="idEmail"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleBlur}
                      ></input>
                    </div>
                    <div className=" absolute top-4 right-0.5">
                      <div className="mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1.5em"
                          height="1.5em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              d="M12 4.5C7.05 4.5 2.73 7.61 1 12c1.73 4.39 6.05 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6.05-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                              fill="gray"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-white">
                    <span className="font-bold text-sm">
                      Your password must contain at least
                    </span>
                    <ul>
                      <li className="mt-2">
                        <div className="flex ">
                          <svg width="24" height="24">
                            <circle
                              cx="12"
                              cy="12"
                              r="6"
                              fill={`${isBlur && !hasLetter ? "red" : "green"}`}
                            />
                          </svg>
                          <span
                            className={`spanStep1 font-normal ${
                              isBlur && !hasLetter ? "text-red-600" : ""
                            }`}
                          >
                            1 letter
                          </span>
                        </div>
                      </li>
                      <li className="mt-2">
                        <div className="flex ">
                          <svg width="24" height="24">
                            <circle
                              cx="12"
                              cy="12"
                              r="6"
                              fill={`${
                                isBlur && !hasNumberOrSpecialChar
                                  ? "red"
                                  : "green"
                              }`}
                            />
                          </svg>
                          <span
                            className={`spanStep1 font-normal ${
                              isBlur && !hasNumberOrSpecialChar
                                ? "text-red-600"
                                : ""
                            }`}
                          >
                            1 number or special character (example: # ? ! &)
                          </span>
                        </div>
                      </li>
                      <li className="mt-2">
                        <div className="flex ">
                          <svg width="24" height="24">
                            <circle
                              cx="12"
                              cy="12"
                              r="6"
                              fill={`${
                                isBlur && !hasMinLength ? "red" : "green"
                              }`}
                            />
                          </svg>
                          <span
                            className={`spanStep1 font-normal ${
                              isBlur && !hasMinLength ? "text-red-600" : ""
                            }`}
                          >
                            10 characters
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="buttonSignup"
                    onClick={handleClickNext}
                  >
                    <span>Next</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
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
  );
};

export default SignupStep2;
