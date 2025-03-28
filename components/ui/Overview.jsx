import AddNewInterview from "@/app/dashboard/_components/AddNewInterview";
import React from "react";

const Overview = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-r from-[#16050f] via-[#2d0124] to-[#050505]  text-white p-8'>
      <div className="flex justify-between items-center mb-6">
        <h1 className='text-4xl font-caveat text-zinc-500 '>
          <span className='wave'>❁</span>
          Hey User
        </h1>

        <button className=" bg-gradient-to-l from-slate-700 to-zinc-800 text-zinc-300 font-semibold py-2 px-5 rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-pink-600 hover:text-white transition-all duration-300 ease-in-out ">
          {/* Test Your Skills */}
          <AddNewInterview/>
        </button>

      </div>

      <div className="text-xl  flex justify-center mb-4 text-zinc-500">Overview - ◑﹏◐</div>

      <hr />

      <div className="grid grid-cols-4 mt-2 ml-32 gap-14">

        {/* Total Interviews */}

        <div>
          <p className="mt-5 mb-4 font-semibold">Total assessments completed</p>
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r via-pink-200 to-blue-100">37</h2>
          <div className=""> <span className="text-lime-500 rounded-sm ">78% </span> from last week</div>
        </div>

        {/* Total Time Spent */}
        <div>
          <p className="mt-5 mb-4 font-semibold">Total time spent</p>
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r via-pink-400 to-rose-100">7 hrs.</h2>
          <div className=""> <span className="text-lime-500 bg-transparent">100% </span> from last week</div>
        </div>

        {/* Completed Interviews */}
        <div>
          <p className="mt-5 mb-4 font-semibold">Completed Assessments</p>
          <h2 className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-red-400  to-blue-500">27</h2>
          <div className=""><span className="text-lime-500 bg-transparent">100% </span>of total Test</div>
        </div>

        {/* Available Interviews */}

        <div>
          <p className="mt-5 mb-4 font-semibold">Available Assessments</p>
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r via-pink-800 to-rose-900">2</h2>
          <div className="text-lime-400">Free credit</div>
        </div>
      </div>

      <hr className="mt-5" />

      <div className="flex justify-center items-center mt-6 h-[-400px] gap-5 mb-0">

        {/* Technical Interviews */}

        <div className="bg-gray-800 p-4 rounded-lg relative w-[600px] h-[400px]">

          <div className="relative h-[250px] w-[250px] mx-auto mt-7">

            {/* pie chart  */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
  <div
    className="absolute inset-0 rounded-full"
    style={{
      background: `conic-gradient(
         #5a3e85 0% 15%,   
         #3f2c63 15% 30%,  
         #271a3d 30% 55%,  
         #32234f 55% 70%,  
         #4e3575 70% 90%,
         #5a3e85 90% 100%
      )`,
    }}
  ></div>
</div>

            <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">Correct </div>
            <div className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Scope </div>
            <div className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Detail </div>
            <div className="absolute bottom-[-1rem] left-0  text-sm">Logic </div>
            <div className="absolute bottom-[-1rem] right-0  text-sm"> Depth </div>
          </div>
          <div className="text-center mt-16 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Interview Performance</div>
        </div>

        {/* Behavioral Interviews */}

        <div className="bg-gray-800 p-4 rounded-lg relative w-[600px] h-[400px]">

          <div className="relative h-[250px] w-[250px] mx-auto mt-7">
            {/* Placeholder for Radar Chart */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
  <div
    className="absolute inset-0 rounded-full"
    style={{
      background: `conic-gradient(
         #5a3e85 0% 15%,   
         #3f2c63 15% 30%,  
         #271a3d 30% 55%,  
         #32234f 55% 70%,  
         #4e3575 70% 90%,
         #5a3e85 90% 100%
      )`,
    }}
  ></div>
</div>
            <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">Speed</div>
            <div className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Skill  </div>
            <div className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Fluent  </div>
            <div className="absolute bottom-[-1rem] left-0  text-sm">Fluent</div>
            <div className="absolute bottom-[-1rem] right-0  text-sm"> Clear  </div>

          </div>
          <div className="text-center mt-16 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500">Candidate Readiness</div>
        </div>

      </div>
    </div>
  );
};

export default Overview;