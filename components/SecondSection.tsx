'use client'

import { Button } from "./ui/button"
import Image from 'next/image'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import TokenRoundedIcon from '@mui/icons-material/TokenRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SecondSection = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('#second_section_a', {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#second_section_a',
                start: 'top 80%',
            },
        });
    }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap my-5">

        <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
            <Image 
                src="/second_section.svg" 
                alt="hero" 
                width={550} 
                height={550} 
                className=""
                id="second_section_a"
            />
        </div>

        <div className="lg:w-1/2 text-left z-10 max-lg:p-5" id="second_section_a">
            <p className="flex font-regular text-md mb-4 text-red-500">
                Features
            </p>
            <h1 className="text-4xl font-bold flex flex-wrap mb-8">
                UiFry Premium
            </h1>
            <div className="flex flex-wrap gap-2 mb-4 ">
                <StarBorderRoundedIcon style={{ color: "red" }} />
                <p  className="text-lg font-semibold mb-4 ">
                    Budgeting Intervals
                </p>
                <p className="max-lg:w-full">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus <br/> tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                <TokenRoundedIcon style={{ color: "red" }} />
                <p  className="text-lg font-semibold mb-4">
                    Budgeting Intervals
                </p>
                <p className="max-lg:w-full">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus <br/> tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                <ViewInArRoundedIcon style={{ color: "red" }} />
                <p  className="text-lg font-semibold mb-4">
                    Budgeting Intervals
                </p>
                <p className="max-lg:w-full">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus <br/> tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
            </div>
        </div>


        <Image 
            src="/redyellow.svg" 
            alt="hero" 
            width={600} 
            height={600} 
            className="absolute "
            id="second_section_a"
        />
        <Image 
            src="/redyellow.svg" 
            alt="hero" 
            width={400} 
            height={400} 
            className="absolute  -right-52 max-lg:hidden"
            id="second_section_a"
        />
        <Image
            src="/star.svg"
            alt="hero"
            width={40}
            height={40}
            className="absolute lg:left-16 max-lg:hidden"
            id="second_section_a"
        />
        {/* 

        <Image
            src="/star.svg"
            alt="hero"
            width={80}
            height={80}
            className="absolute top-3/4 right-1/3 rotate-45 max-md:top-2/3"
            id=""
        />
         */}

         
    </div>
  )
}
export default SecondSection