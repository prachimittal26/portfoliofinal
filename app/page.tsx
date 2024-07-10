import Hero from "@/components/Hero";
import Image from "next/image";
// import Approach from "@/Approach";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/ui/Clients";
import Experience from "@/components/ui/Experience";
import Approach from "@/components/ui/Approach";
import Footer from "@/components/ui/Footer";
// import {Experience}
const  Home=()=> {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        {/* <Approach/> */}
        <Footer/>
      </div>
    </main>
  );
}

export default Home;