"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import {useState} from 'react'
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import {IoCopyOutline} from 'react-icons/io5'

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
        "mx-auto grid max-w-7xl gap-4",
        "grid-cols-1",
        "md:grid-cols-3 md:auto-rows-[14rem]",
        "lg:grid-cols-4 lg:auto-rows-[18rem]",
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
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg: string;
}) => {
     const [copied, setCopied] = useState(false)

    //  Handle email to be copy
     const handleCopy = () => {
      navigator.clipboard.writeText("abdulkarimumar86@gmail.com");

      setCopied(true);
     }

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/[0.1]  transition duration-200 hover:shadow-xl dark:shadow-none relative overflow-hidden",
        className
      )}
       style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0% rgb(59,59,68,1) 26% rgba(93,108,111,1) 100%'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
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
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
       
          {id === 2 && <GlobeDemo />}

          {id === 3 && (
         <div className='flex gap-1 lg:gap-5 w-fit absolute top-6 -right-3 lg:-right-2'>

                <div className='flex flex-col gap-3 lg:gap-8'>
                    {['React.js', 'Next.js', 'TypeScript'].map
                    ((item) => (
                        <span key={item} className='py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                            {item}
                        </span>
                    ))}
                    <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]'/>
                </div>
                <div className='flex flex-col gap-3 lg:gap-8'>
                    <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]'/>
                    {['JavaScript', 'React-Native', 'Node.js'].map
                    ((item) => (
                        <span key={item} className='py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                            {item}
                        </span>
                    ))} 
                </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative'>
                <div className={`absolute -bottom-5 right-0`}
                >
                    <Lottie options={{
                        loop: copied,
                        autoplay: copied,
                        animationData,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYmid slice',
                        }
                    }} />
                </div>
                {/* Copied Email Button */}
                <MagicButton 
                title={copied ? 'Email Copied': 'Copy My Email'}
                icon={<IoCopyOutline />}
                position='left'
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                />
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};