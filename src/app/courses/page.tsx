import React from "react";

export default function Course() {
  return (
    <div>
      <span className="flex items-center mt-10">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">Semester - 1</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 m-5">
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Programming With Python - MCA11
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/python"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Computational Mathematics - MCA12
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/cm"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Computer Organization - MCA13
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/co"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Operating System & Unix - MCA14
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="#"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Data Structures - MCA15
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/ds"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Professional Communication & Ethics - MCA16
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/pce"
          >
            Get Started
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Web Programming - MCA17
          </p>
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5 ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/wp"
          >
            Get Started
          </a>
        </div>
      </div>
      <span className="flex items-center mt-10">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">Semester - 2</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </div>
  );
}
