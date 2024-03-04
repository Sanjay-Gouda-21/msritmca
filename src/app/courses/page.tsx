import React from "react";

export default function Course() {
  return (
    <div>
      <span className="flex items-center mt-10">
        <span className="h-px flex-1 bg-primary"></span>
        <span className="shrink-0 px-6 font-bold text-primary">
          Semester - 1
        </span>
        <span className="h-px flex-1 bg-primary"></span>
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 m-5 ">
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col  justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5 text-center">
            Programming With Python
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/python"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5 text-center">
            Computational Mathematics
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/cm"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5">
            Computer Organization
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/co"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5">
            Operating System & Unix
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center ">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/os"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5">
            Data Structures
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/ds"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5 text-center ">
            Professional Communication & Ethics
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/pce"
          >
            VIEW
          </a>
        </div>
        <div className="h-80 rounded-lg bg-gray-200 flex flex-col justify-center items-center hover:bg-blue-50">
          <p className="text-black font-bold transition hover:text-green-900 m-5">
            Web Programming
          </p>
          <p className="text-blue-700 transition font-semibold hover:text-gray-500/75 m-5 text-center">
            Syllabus | Notes | Question Papers
          </p>
          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="/wp"
          >
            VIEW
          </a>
        </div>
      </div>
      <span className="flex items-center mt-10">
        <span className="h-px flex-1 bg-primary"></span>
        <span className="shrink-0 px-6 font-bold text-primary">
          Semester - 2
        </span>
        <span className="h-px flex-1 bg-primary"></span>
      </span>
      <p className="text-md text-center text-red-600 mt-10">
        {" "}
        Updating Soon ......
      </p>
    </div>
  );
}
