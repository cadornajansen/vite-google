import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function App() {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocusBlur = (isInputFocused) => {
    setIsFocused(isInputFocused);
  };

  const products = [
    {
      title: "Youtube",
      image:
        "https://lh3.googleusercontent.com/3_OFn2skqHXk-UQ-9RUdNrDl_HQJrMCxks5teQcUrF_bOSeDG1hD8j83FeD31W8hASZCvubzsGfumuJq8kvvSAq03wY87RZ7Otx_DF4",
      url: "https://youtube.com",
    },
    {
      title: "News",
      image:
        "https://lh3.googleusercontent.com/9agKA1CG--ihx80qoPwq8xVFZ0i0_nEyLpXlcf8juPbFXe13GhUBR7Y5xOO3LVfnmM06OtrWw086uFlQ9s5jNPlvXJNBQViCvB4L4Q",
      url: "https://news.google.com",
    },
    {
      title: "Playstore",
      image:
        "https://lh3.googleusercontent.com/BwoectM66uur7vsy6UNtarl_XM67Uu7qUakYNj8nh2OuwczsPmwMSLy0BJ6YpN3IXXCytOJHWeVgXkY4NomrvVMgwLVqLjgsaR7Nng",
      url: "https://play.google.com",
    },
    {
      title: "Sheets",
      image:
        "https://lh3.googleusercontent.com/yCF7mTvXRF_EhDf7Kun5_-LMYTbD2IL-stx_D97EzpACfhpGjY_Frx8NZw63rSn2dME0v8-Im49Mh16htvPAGmEOMhiTxDZzo6rB7MY",
      url: "https://docs.google.com/spreadsheets",
    },
    {
      title: "Tensorflow",
      image:
        "https://lh3.googleusercontent.com/eO15LnFfFD9ECIPAuGsimtAJM04IrdnfSlWJKkZI-isxN38Cxu4HwwWqP_3kYUTGyqWVKujUV0Dh9qLCyNeS1azfe02E4KzqttY3eg",
      url: "https://www.tensorflow.org",
    },
    {
      title: "One",
      image:
        "https://lh3.googleusercontent.com/0FzUpe1CuQEGq3SzSSNuxBl_OIPzLp-hcKfpD_0opmS0IVjtphsZ74CS5wsrxmLy1X3E_lTsPPUYpSfD1dV_YK_Z2X2XUZuv-4kzSg",
      url: "https://one.google.com",
    },
    {
      title: "Meet",
      image:
        "https://lh3.googleusercontent.com/n3Eac1gPc5OTEh7Go1jemICnooceXtfs4VZW-4CPukCUi_doFsN9Q8njidksZ4KIFyPJVYtR7ZhLL16VoUJSPE1j74iTXT2xwCqq",
      url: "https://meet.google.com",
    },
    {
      title: "Cloud",
      image:
        "https://lh3.googleusercontent.com/VEnnK2SyklusfxZ3dIYjlQH3xSwK2BFSJ69TFQ9g8HjM6m3CouRlTia5FW3z3GS0x83WC9TylZCaA9Jf_2kmr7mXxI9_HYLZTFy_bg",
      url: "https://cloud.google.com",
    },
  ];

  return (
    <main className="relative flex flex-col h-screen max-h-screen justify-center items-center text-center">
      <div className="relative flex flex-col justify-center items-center h-full w-full z-[20]">
        {/* Header */}
        <div className="p-5 absolute md:fixed top-0 w-full">
          <header className="flex w-full justify-between">
            <div className="flex items-center gap-3">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              <h1 className="font-bold">Search</h1>
            </div>
            <div>
              <nav className="flex gap-4 items-center w-full">
                <ul className="hidden md:flex gap-8 w-full">
                  <li>
                    <a href="/">Gmail</a>
                  </li>
                  <li>
                    <a href="/about">Drive</a>
                  </li>
                  <li>
                    <a href="/contact">Maps</a>
                  </li>
                </ul>
                {/* User Dropdown */}
                <Menu as="div" className="relative hidden md:inline-block">
                  {/* Dropdown Toggle Button */}
                  <Menu.Button className="inline-flex justify-center items-center font-semibold rounded-lg py-2 leading-5 text-sm">
                    <img
                      className="rotate-90"
                      width="25"
                      height="25"
                      src="https://img.icons8.com/ios-glyphs/ffffff/64/ellipsis.png"
                      alt="circled-chevron-down"
                    />
                  </Menu.Button>
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 origin-top-right z-10 w-48 shadow-xl rounded-lg focus:outline-none bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                      <div className="w-full grid grid-cols-2 items-center justify-center">
                        {products.map((product, index) => {
                          return (
                            <a className="w-full" href={product.url}>
                              <div
                                key={index}
                                className="space-y-2 w-full flex flex-col items-center justify-center my-4"
                              >
                                <img
                                  className="smooth hover:scale-[1.1] "
                                  width="38"
                                  height="38"
                                  src={product.image}
                                  alt={product.title}
                                />
                                <span className="smooth hover:opacity-90 opacity-60 font-medium text-[14px]">
                                  {product.title}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* END Dropdown */}
                </Menu>
                {/* END User Dropdown */}
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/material-rounded/ffffff/45/user-male-circle.png"
                  alt="user-male-circle"
                />
              </nav>
            </div>
          </header>
        </div>
        {/* Header */}
        {/* Main Search */}
        <div className="flex flex-col gap-1 md:gap-5 justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center overflow-hidden h-[105px] md:w-[250px] md:h-[105px]">
              <img className="object-cover w-full h-full" src="/google.png" />
            </div>
            <h1 className="hidden md:block font-semibold px-10 md:px-0 text-lg">
              The Most Popular Search Engine in the World
            </h1>
          </div>
          <div
            className={`smooth w-full ${
              isFocused ? "max-w-[20rem] md:max-w-[35rem]" : "max-w-[20rem] md:max-w-[28rem]"
            }`}
          >
            <div
              className={`smooth w-full flex gap-3 items-center text-white bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-20 rounded-full py-2 px-4 md:px-5 md:py-4 ${
                isFocused ? "shadow-xl" : "shadow-md"
              }`}
            >
              <input
                onFocus={() => handleInputFocusBlur(true)}
                onBlur={() => handleInputFocusBlur(false)}
                className="w-full bg-transparent outline-none"
                placeholder="Start typing to search..."
              />

              <div
                className={`smooth cursor-pointer  hover:opacity-100 ${
                  isFocused ? "opacity-100 rotate-[25deg]" : "opacity-60"
                }`}
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/sf-black/ffffff/64/search.png"
                  alt="search"
                />
              </div>
              <svg
                className="w-8 h-8 cursor-pointer smooth opacity-90 hover:opacity-100"
                focusable="false"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="192" width="192"></rect>
                <g>
                  <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                  <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                  <path
                    fill="#ea4335"
                    d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                  ></path>
                  <path
                    fill="#fbbc04"
                    d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              className={`smooth gap-3 flex items-center  bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-800 px-4 py-2 rounded-full  hover:scale-[1.04] ${
                isFocused
                  ? "scale-[0.95] shadow-md"
                  : "shadow-lg  hover:shadow-xl"
              }`}
            >
              <img
                height={24}
                width={24}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_Bard_logo.svg/600px-Google_Bard_logo.svg.png?20230425130013"
              />
              <a href="https://bard.google.com" target="_blank" className="font-bold text-sm">Try Google Bard!</a>
            </button>
          </div>
        </div>
        {/* Main Search */}
        {/* Footer */}
        <div className="p-5 fixed flex flex-col md:flex-row justify-center text-center md:justify-between w-full bottom-0 text-xs md:text-sm space-y-3 md:space-y-0">
          <div className="footer flex gap-10 md:gap-5 justify-center">
            <a href="https://about.google/?">About</a>
            <a href="https://ads.google.com">Advertising</a>
            <a href="https://www.google.com/intl/en_ph/business/">Bussiness</a>
            <a className="hidden md:block" href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
          </div>
          <div className="footer flex gap-8 md:gap-5 justify-center">
            <a href="https://policies.google.com/terms?hl=en-PH&fg=1">Terms</a>
            <a href="https://policies.google.com/privacy?hl=en-PH&fg=1">Privacy</a>
            <a>Settings</a>
          </div>
        </div>
        {/* Footer */}
      </div>
      <img
        className="absolute inset-1 opacity-80 blur-lg w-[80%] top-[200px] left-0 z-[10] h-full select-none md:top-0"
        src="/bg.webp"
      />
    </main>
  );
}
