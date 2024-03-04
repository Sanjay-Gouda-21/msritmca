import React from "react";

function Home() {
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

          {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
