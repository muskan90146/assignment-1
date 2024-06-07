import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center pl-20 py-10">
        <div className="lg:w-1/2 text-left ">
            <h1 className="text-6xl font-bold flex flex-wrap mb-4">
                Make the best financial decisions
            </h1>
            <p className="flex text-md mb-4">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <Button>Get Started</Button>
            <Image src="/hero1.svg" alt="hero" width={500} height={500} />
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-4">
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


        
    </div>

  )
}
export default Hero