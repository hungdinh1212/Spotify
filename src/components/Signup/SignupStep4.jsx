// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../../css/Signup.css";

export default function SignupStep4() {
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
                <div className="tienTrinh100" aria-valuenow={100}></div>
              </div>
              <div className="flex mt-4 ">
                <Link to="/signup/step3">
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
                  <span className="text-gray-400 font-normal">Step 3 of 3</span>
                  <span className="text-white font-bold">
                    Terms & Conditions
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full font-bold mt-4">
              <div>
                <div className="backgroundCheckBox text-white">
                  <div className="flex">
                    <div>
                      <input type="checkbox"></input>
                    </div>
                    <label className="mx-3 text-sm font-medium pr-3">
                      I would prefer not to receive marketing messages from
                      Spotify
                    </label>
                  </div>
                </div>
                <div className="backgroundCheckBox text-white mt-2">
                  <div className="flex">
                    <div>
                      <input type="checkbox"></input>
                    </div>
                    <label className="mx-3 text-sm font-medium pr-3">
                      Share my registration data with Spotify's content
                      providers for marketing purposes.
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm font-normal">
                <div>
                  <span className="text-white">
                    By clicking on sign-up, you agree to Spotify's &nbsp;
                    <a
                      className="underline text-green-600"
                      href="https://www.spotify.com/vn-vi/legal/end-user-agreement/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions of Use
                    </a>
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-white">
                    To learn more about how Spotify collects, uses, shares and
                    protects your personal data, please see &nbsp;
                    <a
                      className="underline text-green-600"
                      href="https://www.spotify.com/vn-vi/legal/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify's Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <div>
                  <button type="button" className="buttonSignup">
                    <span>Sign Up</span>
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
}
