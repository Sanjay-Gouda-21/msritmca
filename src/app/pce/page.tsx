import React from "react";

export default function Pce() {
  return (
    <div>
      {/* <div className="grid grid-cols-1 items-center bg-grey-400 p-5 w-fit rounded-md mx-auto text-bold text-lg">
        <h1 className=" text-yellow-500 text-center">Notes Prepared By</h1>
        <h1 className=" text-lg text-cyan-400 text-pretty font-bold ">
          Ms. Nithya Bala
        </h1>
      </div> */}

      <span className="flex items-center mt-10">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6">Syllabus & Notes</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 m-5">
        <div className="h-40 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Syllabus Copy - professional Communication and Ethics
          </p>

          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500  focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="https://drive.google.com/file/d/1Qdoz6AJbEhplNbSISQkGGQChMRCIG2UB/view?usp=sharing"
            target="_blank"
          >
            Checkout
          </a>
        </div>
        <div className="h-40 rounded-lg bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-gray-500 transition hover:text-gray-500/75 m-5">
            Technical Communication by Meenakshi Raman
          </p>

          <a
            className="block mx-auto w-fit rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-500  focus:outline-none focus:ring active:bg-red-500 sm:w-auto self-end"
            href="https://gnindia.dronacharya.info/CSE-AI-ML/Common-Subjects/Downloads/Technical-Communication/Books/Technical-Communication-Book-1.pdf"
            target="_blank"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
