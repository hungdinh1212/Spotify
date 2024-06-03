import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../../css/Signup.css";

import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SignupStep3 = () => {
  const [date, setDate] = useState(null);
  const [isEmptyName, setIsEmpty] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isDateEmpty, setIsDateEmpty] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [gender, setGender] = useState("");
  const [isGenderEmpty, setIsGenderEmpty] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const handleBlur = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    setIsBlur(true);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setIsGenderEmpty(true);
  };
  const handleDateChange = (date) => {
    setIsBlur(true);
    setDate(date);
    setIsDateEmpty(false);
  };

  const handleClickNext = () => {
    setIsClick(true);
    if (!isGenderEmpty && !isEmptyName && !date) {
      setIsGenderEmpty(true);
      setIsDateEmpty(true);
      setIsEmpty(true);
    }

    if (!isEmptyName && !isDateEmpty && isGenderEmpty) {
      navigate("/signup/step4");
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
                <div className="tienTrinh6666" aria-valuenow={66.6666}></div>
              </div>
              <div className="flex mt-4 ">
                <Link to="/signup/step2">
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
                  <span className="colorChung font-normal">Step 2 of 3</span>
                  <span className="text-white font-bold">
                    Tell us about yourself
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full font-bold mt-4">
              <label className="text-white text-sm font-bold">Name</label>
              <p className="colorChung text-sm">
                This name will appear on your profile
              </p>
              <div className="pt-2">
                <div>
                  <div className="relative">
                    <div>
                      <input
                        className={`signupInput relative ${
                          (isClick && isEmptyName) || (isBlur && isEmptyName)
                            ? "error"
                            : ""
                        }`}
                        onBlur={handleBlur}
                        id="idEmail"
                        type="text"
                        placeholder="Nguyen Van A"
                      ></input>
                      <div
                        className={`mt-2 text-sm ${
                          (isClick && isEmptyName) || (isBlur && isEmptyName)
                            ? "flex"
                            : "hidden"
                        }`}
                      >
                        <svg
                          className=" w-5 h-5 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="red"
                        >
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6C6.189 21.6 2.4 17.811 2.4 12S6.189 2.4 12 2.4 21.6 6.189 21.6 12 17.811 21.6 12 21.6zM12 5.4a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 0 0 2.4 0V6.6A1.2 1.2 0 0 0 12 5.4zm0 9.6a1.2 1.2 0 0 0-1.2 1.2v.006a1.2 1.2 0 0 0 2.4 0V16.2A1.2 1.2 0 0 0 12 15z" />
                        </svg>
                        <span className="text-red-600">
                          Enter a name for your profile.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-white">
                    <span className="font-bold text-sm">Date of birth</span>
                    <p>
                      <span className="colorChung text-sm">
                        {" "}
                        Why do we need your date of birth?{" "}
                        <a
                          href="https://www.spotify.com/legal/end-user-agreement/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn more
                        </a>
                      </span>
                    </p>
                    <div className="w-full">
                      <DatePicker
                        className={`text-black p-3 ${
                          (isClick && isDateEmpty) || (isBlur && isDateEmpty)
                            ? "error"
                            : ""
                        }`}
                        selected={date}
                        onChange={handleDateChange}
                        onBlur={() => setIsDateEmpty(!date)}
                      />
                    </div>
                    <div
                      className={`mt-2 text-sm ${
                        isDateEmpty ? "flex" : "hidden"
                      }`}
                    >
                      <svg
                        className=" w-5 h-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={` ${isDateEmpty ? "red" : ""}  `}
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6C6.189 21.6 2.4 17.811 2.4 12S6.189 2.4 12 2.4 21.6 6.189 21.6 12 17.811 21.6 12 21.6zM12 5.4a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 0 0 2.4 0V6.6A1.2 1.2 0 0 0 12 5.4zm0 9.6a1.2 1.2 0 0 0-1.2 1.2v.006a1.2 1.2 0 0 0 2.4 0V16.2A1.2 1.2 0 0 0 12 15z" />
                      </svg>
                      <span className="text-sm text-red-600">
                        Please choose your birthday.
                      </span>
                    </div>
                  </div>
                  <fieldset className="mt-4">
                    <p className="text-white font-bold text-sm">Gender</p>
                    <p className="colorChung  text-sm">
                      We use your gender to help personalize our content
                      recommendations and ads for you.
                    </p>
                    <div className="text-white flex flex-wrap text-sm">
                      <div className="flex">
                        <input
                          type="radio"
                          value="Male"
                          name="gender"
                          onChange={handleGenderChange}
                        />
                        <label className="paddingLabel font-normal">Man</label>
                      </div>

                      <div className="flex">
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          onChange={handleGenderChange}
                        />{" "}
                        <label className="paddingLabel font-normal">
                          Woman
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="radio"
                          value="Other"
                          name="gender"
                          onChange={handleGenderChange}
                        />{" "}
                        <label className="paddingLabel font-normal">
                          Non-binary
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          onChange={handleGenderChange}
                        />{" "}
                        <label className="paddingLabel font-normal">
                          Something else
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="radio"
                          value="Other"
                          name="gender"
                          onChange={handleGenderChange}
                        />{" "}
                        <label className="paddingLabel font-normal">
                          Prefer not to say
                        </label>
                      </div>
                    </div>
                    <div
                      className={`mt-2 text-sm ${
                        isDateEmpty ? "flex" : "hidden"
                      }`}
                    >
                      <svg
                        className=" w-5 h-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6C6.189 21.6 2.4 17.811 2.4 12S6.189 2.4 12 2.4 21.6 6.189 21.6 12 17.811 21.6 12 21.6zM12 5.4a1.2 1.2 0 0 0-1.2 1.2v7.2a1.2 1.2 0 0 0 2.4 0V6.6A1.2 1.2 0 0 0 12 5.4zm0 9.6a1.2 1.2 0 0 0-1.2 1.2v.006a1.2 1.2 0 0 0 2.4 0V16.2A1.2 1.2 0 0 0 12 15z" />
                      </svg>
                      <span className="text-sm text-red-600">
                        Select your gender.
                      </span>
                    </div>
                  </fieldset>

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

export default SignupStep3;
