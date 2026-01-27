'use client'
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import React from 'react'

const Experience = () => {
    const [duration, setDuration] = React.useState(15000);

    React.useEffect(() => {
        setDuration(Math.floor(Math.random() * 10000) + 10000);
    }, []);

    return(
        <div className='py-20' id='testimonials'>
            <h1 className='block text-center text-[25px] 
                md:text-5xl lg:text-6xl font-bold'>
                My  {' '}
                <span className=' text-purple-light'>work experience</span>
            </h1>
            
        <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
            {workExperience.map((card) => (
                <Button key={card.id}
                    duration={duration}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'>

                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail}
                        className='lg:w-32 md:w-20 w-16' />

                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-200 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
        </div>
    )
}

export default Experience