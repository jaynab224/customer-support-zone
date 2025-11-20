import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      
      <div className="p-5 max-w-7xl mx-auto">
       
      </div>
      <div className="grid grid-cols-2 gap-[20px] my-[50px]">
         {/* mainpart kormu */}
      <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex items-center justify-center flex-col">
        {/* <img src="/src/components/vector1.png" alt="" className="w-16 h-16 filter filter  mb-3" /> */}
        <h2 className="font-bold text-[35px]">In-Progress</h2>
      <p className="font-semibold text-[22px]">0</p>
       </div>
          <div className="rounded-md p-7 text-white h-[250px] bg-green-600 flex items-center justify-center flex-col">
             {/* <img src="/src/components/vector1.png" alt="" className="w-16 h-16 filter filter  mb-3" /> */}
            <h2 className="font-bold text-[35px]">Resolved</h2>
            <p className="font-semibold text-[22px] ">0</p>
           
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
