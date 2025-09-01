import React from 'react';
import Sheep from './SheepElement.jsx';
import { useSheepHover } from '../../../utils/animations/useSheepHover';
import Character from './Character';

const Hero = () => {
    // independent sheep animations
    const sheepRef1 = useSheepHover('120vw', 6);
    const sheepRef2 = useSheepHover('120vw', 7);
    const sheepRef3 = useSheepHover('120vw', 5);

    return (
        <section className="relative  h-[550px] ml-10">
            <div className="mt-10 ml-8 font-roboto">
                <h4 className="text-[28px] font-normal text-[#999EB9]">
                    Recently mastered the art of PowerPoint.
                </h4>
                <h5 className="text-[28px] font-normal text-black">
                    Nice to meet you, I’m Sean Lin.
                </h5>
            </div>
            <div className=" absolute top-0 right-0  w-1/6 flex justify-center cursor-pointer ">
                <div className='pt-4 pl-2 flex flex-col gap-1 items-center'>
                    <a href="" className=" text-[#003FFF] font-bold tracking-tight underline ">Meet Sean</a>
                    <img src="/images/arrow.png" alt="" className='h-[30px] w-[12px]'/>
                </div>
            <Character />
            </div>
                {/* Sheep layout */}
            <div className="absolute top-[-50px] left-[570px] " ref={sheepRef1}>
                <Sheep />
            </div>

            {/* Center sheep */}
            <div className="absolute top-[100px] left-[320px]" ref={sheepRef2}>
                <Sheep />
            </div>

            <div className="absolute top-[100px] left-[900px]" ref={sheepRef3}>
                <Sheep />
            </div>

            <div className='absolute bottom-0 left-[20px]'>
                <div class="max-w-xl space-y-2">
                  
                    <div class="w-20 border-t border-gray-400"></div>

                   
                    <p class=" text-gray-800 text-[11px] font-normal">
                        Sean Chasing Three Sheep • 2021 • Pixel on Web
                    </p>

                
                    <p class="text-sm text-gray-500 leading-relaxed text-[11px]">
                        “Sean Chasing Three Sheep” as the title suggests, illustrates the artist chasing three sheep.
                        Lin, currently a Resident Alien living in the United States of America, runs in place with a hopeful facade and
                        watches as his dreams slip away. A seemingly light hearted and humorous narrative, disguises a deeper reality and
                        fear of unemployment, immigration status, and uninspiring design.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Hero;
