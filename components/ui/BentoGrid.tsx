// 'use client'

// import { cn } from "@/utils/cn";
// import { BackgroundGradientAnimation } from "./GradientBg";

// import { GlobeDemo } from "./GridGlobe";
// import { useState } from "react";
// import Lottie from "react-lottie";
// import animationData from '@/data/confetti.json';
// import { IoCopyOutline } from "react-icons/io5";
// import MagicButton from "../MagicButton";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
//         className
//       )}
//       // style={{
//       //   background:'rgb(2,0,36)',
//       //   backgroundColor:'linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(59,59,68,1) 26%,rgba(93,108,111,1) 100%',
//       // }}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   id,
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   id?: number;
//   //   musst include without question mark lyk id
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   // const leftLists = ["ReactJS", "Express", "Typescript"];
//   // const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
//     const [copied,setCopied]=useState(false);

//     const defaultOptions = {
//       loop: copied,
//       autoplay: copied,
//       animationData: animationData,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice",
//       },
//     };

//     const handleCopy=()=>{
//     //   const text = "hsu@jsmastery.pro";
//     // navigator.clipboard.writeText(text);
//       navigator.clipboard.writeText('prachimittal263@gmail.com');

//       setCopied(true);
//     };
//   return (
//     <div
//       // overflor-hidden
//       className={cn(
//         "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] ",
//         className
//       )}
//       style={{
//         background: "rgb(4,7,29)",
//         backgroundColor:
//           // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,121,136,1) 26%, rgba(0,212,255,1) 100%)",
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       <div className={`${id === 6 && 'flex justify-center'} h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, "object-cover,object-center")}
//             />
//           )}
//         </div>
//         <div
//           className={`absolute right-0 -bottom-5 ${
//             id === 5 && "w-full opacity-80"
//           }`}
//         >
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               className="object-cover object-center w-full h-full"
//             />
//           )}
//         </div>
//         {id === 6 && (
//           <BackgroundGradientAnimation>
//             <div className="absolute z-50  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> 
//           </BackgroundGradientAnimation>
//         )}

//         <div
//           className={cn(
//             titleClassName,
//             "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           <div className="font-sans font-extralight text-[#c1c2d3] text-ms md:text-xs lg:text-base z-10">
//             {description}
//           </div>
//           <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
//             {title}
//           </div>

//           {id === 2 && <GlobeDemo/>}
//           {id === 3 && (
//             <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
//               <div className="flex flex-col gap-3 lg:gap-8  md:gap-3">
//                 {['React.js', 'Next.js', 'TypeScript','DSA'].map((item) => (
//                   <span
//                     key={item}
//                     className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
                
//                 <span className="g:py-4 lg:px-3 rounded-lg text-center bg-[#10132e]" ></span>
//               </div>
                
//               <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
//               <span className="lg:py-4 lg:px-3 py-4 rounded-lg text-center bg-[#10132e]"></span>
//                 {['Javascript','AWS','MySQL','Blockchain'].map((item) => (
//                   <span
//                     key={item}
//                     className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
                
//               </div>

//               <div className="flex flex-col gap-3 lg:gap-8">
//                 {['REST API', 'C++', 'DBMS','JSX'].map((item) => (
//                   <span
//                     key={item}
//                     className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//                 <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
//               </div>
//             </div>
//           )}
//           {id===6 && (
//             <div className="mt-5 relative">
//               <div className={`absolute -bottom-5 right-0  ${copied ? "block" : "block"
//                   }`}>
//                 <Lottie options={{
//                   loop:copied,
//                   autoplay:copied,
//                   animationData,
//                   rendererSettings:{
//                     preserveAspectRatio:'xMidTMid slice',                  }
//                 }}/>
//                 {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
//               </div>

//                 <MagicButton
//                 title={copied ? 'Email is copied!' : 'Copy my email address'} icon={<IoCopyOutline/>} 
//                 position="left"
//                 icon={<IoCopyOutline />}
//                 otherClasses="!bg-[#161a31]"      
//                 handleClick={handleCopy}    
//                 />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  //   musst include without question mark lyk id
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
    const [copied,setCopied]=useState(false);

    const defaultOptions = {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const handleCopy=()=>{
    //   const text = "hsu@jsmastery.pro";
    // navigator.clipboard.writeText(text);
      navigator.clipboard.writeText('prachimittal263@gmail.com');

      setCopied(true);
    };
  return (
    <div
      // overflor-hidden
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] ",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,121,136,1) 26%, rgba(0,212,255,1) 100%)",
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover,object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> 
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-ms md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
            {title}
          </div>

          {id === 2 && <GlobeDemo/>}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8  md:gap-3">
                {/* {['React.js', 'Next.js', 'TypeScript','DSA'].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))} */}
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="g:py-4 lg:px-3 rounded-lg text-center bg-[#10132e]" ></span>
              </div>
                
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 rounded-lg text-center bg-[#10132e]"></span>
                {/* {['Javascript','AWS','MySQL','Blockchain'].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))} */}
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* <div className="flex flex-col gap-3 lg:gap-8">
                {['REST API', 'C++', 'DBMS','JSX'].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div> */}
            </div>
          )}
          {id===6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0  ${copied ? "block" : "block"
                  }`}>
                {/* <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidTMid slice',                  }
                }}/> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

                <MagicButton
                title={copied ? 'Email copied!' : 'Copy my email address'} icon={<IoCopyOutline/>} 
                position="left"
                // icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"      
                handleClick={handleCopy}    
                />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};