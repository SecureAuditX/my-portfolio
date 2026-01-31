import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, technology, testimonials } from '../data/index';

const Clients = () => {
    return(
        <div className='py-20' id='testimonials'>
            <h1 className='block text-center text-[25px] 
                md:text-5xl lg:text-6xl font-bold'>
                Kind words from {' '}
                <span className=' text-purple-light'>satisfied clients</span>
            </h1>
            
            <div className='flex flex-col items-center mx-lg:mt-10'>
               
                <InfiniteMovingCards
                items={testimonials} 
                direction='right'
                speed='slow'
                
                />
                {/* Section for companies you worked with before */}
               <div className='flex flex-rows items-center justify-center gap-4 md:gap-16 max-lg md:max-w-300'>
                {technology.map(({ id, img, name, nameImg }) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    
                    {img && (
                    <img
                        src={img}
                        alt={name || "technology"}
                        className="md:w-15 w-10"
                    />
                    )}

                    {nameImg && (
                    <img
                        src={nameImg}
                        alt={name || "technology name"}
                        className="md:w-24 w-20"
                    />
                    )}

                </div>
                ))}

               </div>
                
        </div>
        </div>
    )
}

export default Clients