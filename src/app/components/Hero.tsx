import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to MCAPEDIA
            {/* <strong className="font-bold size-25 mt-5 text-primary sm:block">
              {" "}
              Department of MCA{" "}
            </strong> */}
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Your hub for accessing notes, question papers, and other resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
