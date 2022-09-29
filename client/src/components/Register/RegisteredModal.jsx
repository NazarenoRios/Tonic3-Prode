import React from "react";

function RegisterForm() {
  
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ zIndex: "100000" }}
    >
      <div
        id="menu"
        className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
            <div className="mt-12">
              <h1
                role="main"
                className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
              >
                Congratulations! 😊
              </h1>
            </div>
            <div className="mt">
              <p className="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800 mb-5">
                You have successfully registered, now you must accept the
                verification email
              </p>
            </div>
            <div className="mt">
              <span className="mt-6 text-center text-sm font-bold text-red-500">
                Don't forget to check the spam folder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
