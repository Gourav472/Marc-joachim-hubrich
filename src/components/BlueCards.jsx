import React from 'react'
import Slider from "react-slick";
const BlueCards = () => {
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <>
            <section className=' bg-blue_cards_bg bg-no-repeat bg-cover '>
                <div className=' max-md:hidden container'>
                    <div data-aos="fade-left" className='flex max-md:hidden max-lg:gap-4 justify-center lg:justify-end'>
                        <div className=' max-w-[250px] w-full min-h-[162px] flex justify-center bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>Your self-esteem is in the basement.</p>
                        </div>
                        <div className=' max-w-[250px] w-full min-h-[162px] flex justify-center bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You keep asking yourself what you did wrong.</p>
                        </div>
                        <div className=' max-w-[250px] w-full min-h-[162px] flex justify-center bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>The feeling of helplessness is your constant companion.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='flex max-md:hidden max-lg:gap-4 justify-center lg:justify-start pt-[29px]'>
                        <div className=' max-w-[250px] flex justify-center w-full min-h-[162px] bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You spend the nights alone and lonely.</p>
                        </div>
                        <div className=' max-w-[250px] flex justify-center w-full min-h-[162px] bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You have stopped going out and spend the time crying in your room.</p>
                        </div>
                        <div className=' max-w-[250px] flex justify-center w-full min-h-[162px] bg-[#003E9233] p-[42px_26px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>An emotional chaos <span className=' block'></span> is raging inside you.</p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <Slider {...settings} className=' py-[48px] '>
                        <div className=' ms-6 me-2 max-w-[250px] w-full max-md:h-[120px]  flex justify-center bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>Your self-esteem is in the basement.</p>
                        </div>
                        <div className=' mx-2 max-w-[250px] w-full max-md:h-[120px]  flex justify-center bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You keep asking yourself what you did wrong.</p>
                        </div>
                        <div className=' mx-2 max-w-[250px] w-full max-md:h-[120px]  flex justify-center bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>The feeling of helplessness is your constant companion.</p>
                        </div>
                        <div className=' mx-2 max-w-[250px] flex justify-center w-full max-md:h-[120px]  bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You spend the nights alone and lonely.</p>
                        </div>
                        <div className=' mx-2 max-w-[250px] flex justify-center w-full max-md:h-[120px]  bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>You have stopped going out and spend the time crying in your room.</p>
                        </div>
                        <div className=' mx-2 max-w-[250px] flex justify-center w-full max-md:h-[120px]  bg-[#003E9233] p-[25px] hover:bg-blue duration-300 ease-linear cursor-pointer'>
                            <p className=' text-white font-Poppins font-[400] text-[16px] leading-[25px]'>An emotional chaos <span className=' block'></span> is raging inside you.</p>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default BlueCards