"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
// import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader"; // Import the Loader component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading scenario (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  //

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        {/* <Approach/>  */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;


// import Hero from "@/components/Hero";
// import Image from "next/image";
// // import Approach from "@/components/Approach";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
// import Grid from "@/components/Grid";
// import RecentProjects from "@/components/RecentProjects";
// import { navItems } from "@/data";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";

// const  Home=()=> {
//   return (
//     <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip  ">
      
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems}/>
//         <Hero/>
//         <Grid/>
//         <RecentProjects/>
//         <Clients/>
//         <Experience/>
//         {/* <Approach/>  */}
//         <Footer/>
//       </div>
//     </main>
//   );
// }

// export default Home;