import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="pt-20 ">
      <div className="max-w-screen-sm mx-auto text-center mb-20">
        <h2 className="text-3xl font-main capitalize mb-6">Join my newsLetter</h2>
        <form className="flex items-center sm:flex-row flex-col justify-center sm:space-x-6 sm:space-y-0 space-y-4 px-4">
          <input type="text" className="border border-gray-200 bg-gray-50 py-2 w-full" />
          <button className="px-4 py-2 border border-black bg-black text-white font-main capitalize text-md">
            submit
          </button>
        </form>
      </div>
      <div className="bg-black text-center py-6">
          <p className="text-secondary text-white  text-md">
              &copy;  copy right Zinochan 2021
          </p>
      </div>
    </section>
  );
};

export default Footer;
