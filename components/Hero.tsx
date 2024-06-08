import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center pl-20 py-10 flex-wrap my-7">
        <div className="lg:w-1/2 text-left z-10">
            <h1 className="text-6xl font-bold flex flex-wrap mb-4">
                Make the best financial decisions
            </h1>
            <p className="flex text-md mb-4">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <Button>Get Started</Button>
            <Image src="/hero1.svg" alt="hero" width={450} height={450} />
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-4 max-lg:hidden">
            <Image 
                src="/tilted2.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-10 right-20 z-30"
            />
            <Image 
                src="/iPhone-13-Pro-Front.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-20 right-0 z-20"
            />
            <Image 
                src="/tiltediphone.svg" 
                alt="hero" 
                width={500} 
                height={500} 
                className="absolute top-0 right-0 z-10 pt-8"
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
            className="absolute top-28 left-36"
        />

        <Image
            src="/star.svg"
            alt="hero"
            width={80}
            height={80}
            className="absolute top-3/4 left-1/3 rotate-45 max-md:top-2/3"
        />
        <Image
            src="/star.svg"
            alt="hero"
            width={40}
            height={40}
            className="absolute top-32 left-5 rotate-45"
        />

         
    </div>

  )
}
export default Hero