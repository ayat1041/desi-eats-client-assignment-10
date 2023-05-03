import React from "react";
import bannerHome from '../../assets/banner_home.jpg'
const Header = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage : `url(${bannerHome})`}}>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] lg:bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)]"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Cook Professionally
            <strong className="block font-extrabold text-yellow-400 mt-2">
              At Home.
            </strong>
          </h1>
            <p className="text-white mt-2">
                We have recipes of indian cuisine from the best chefs from India.<br></br>
                So! No chances of ruining all the efforts in kithcen.
            </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#ourChefs"
              className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              View Chefs
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
