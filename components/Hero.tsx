'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    useGSAP(()=>{
        gsap.from("#tilted2", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})
        gsap.from("#iPhone-13-Pro-Front", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})
        gsap.from("#tiltediphone", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})
        gsap.from("#red", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})
        gsap.from("#redyellow", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})
        gsap.from("#star", {duration: 1, x: 100, y: -100, rotate: 45, scale: 0, ease: "power2.inOut"})

        gsap.from("#lefthero", {duration: 1, x: -100, y: -100, rotate: -45, scale: 0, ease: "power2.inOut"})
    },[])

  return (
    <div className="flex flex-col lg:flex-row items-center lg:pl-20 py-10 flex-wrap my-7">
        <div className="lg:w-1/2 text-left z-10 max-lg:p-5" id="lefthero">
            <h1 className="text-6xl font-bold flex flex-wrap mb-4">
                Make the best financial decisions
            </h1>
            <p className="flex text-md mb-4">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <Button>Get Started</Button>
            <Image src="/hero1.svg" alt="hero" width={450} height={450} className="max-lg:w-[300px] max-lg:h-[300px]"/>
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-4 max-lg:hidden">
            <Image 
                src="/tilted2.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-10 right-20 z-30"
                id="tilted2"
            />
            <Image 
                src="/iPhone-13-Pro-Front.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-20 right-0 z-20"
                id="iPhone-13-Pro-Front"
            />
            <Image 
                src="/tiltediphone.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-0 right-0 z-10 pt-8"
                id="tiltediphone"
            />
        </div>

        <Image
            src="/red.svg"
            alt="hero"
            width={600}
            height={600}
            className="absolute top-0 right-0 max-lg:hidden"
        />
        <Image 
            src="/redyellow.svg" 
            alt="hero" 
            width={400} 
            height={400} 
            className="absolute lg:top-28 lg:left-36"
            id="lefthero"
        />

        <Image
            src="/star.svg"
            alt="hero"
            width={80}
            height={80}
            className="absolute lg:top-3/4 lg:left-1/3 rotate-45 max-md:top-2/3 max-lg:hidden"
            id="lefthero"
        />
        <Image
            src="/star.svg"
            alt="hero"
            width={40}
            height={40}
            className="absolute lg:top-32 lg:left-5 rotate-45 max-lg:top-28 max-lg:right-5"
            id="lefthero"
        />

         
    </div>

  )
}
export default Hero