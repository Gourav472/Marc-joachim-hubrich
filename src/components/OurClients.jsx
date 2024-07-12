import React from 'react'
import womenelipse from '../assets/svg/elipse-women.svg'
import elipse10 from '../assets/webp/elipse10.webp'
import sliderblue from '../assets/svg/slider-blue.svg'
const OurClients = () => {

    return (
        <>

            <section className=' pt-[10px] pb-[48px] md:py-[80px] lg:pt-[202px] lg:pb-[226px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-col items-center'>
                        <h2 className=' uppercase text-center ff-hel text-black font-[400] text-[32px] sm:text-[45px] md:text-[52px] leading-[45px] md:leading-[66px]'>What our <span className=' text-orange'>clients</span> say</h2>
                        <div className=' flex flex-row max-w-[820px] flex-wrap mx-[-12px] pt-[84px]'>
                            <div className=' w-full flex justify-center px-[12px] xl:px-[0px]'>
                                <div className=' max-w-[820px] relative w-full p-[50px_20px_20px_20px] md:p-[58px_50px_32px_49px] flex flex-col shadow-3xl'>
                                    <p className=' opacity-70 max-w-[721px] text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.</p>
                                    <p className=' font-Poppins font-[500] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center pt-4 text-black '>Marrie James-CEO</p>
                                    <p className=' pt-[2px] text-center text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Limana Enterprises, CA</p>
                                    <img className=' pointer-events-none absolute top-[-50px] left-[45%] ' src={womenelipse} alt="women" />
                                </div>
                            </div>
                            <div className=' w-full justify-center flex sm:justify-start sm:w-6/12 px-[12px] xl:px-0 mt-4 sm:mt-[20px]'>
                                <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] max-w-[400px] w-full flex flex-col'>
                                    <p className=' opacity-70 text-black max-w-[328px] font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                    <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Ralph Edwards-CEO</p>
                                    <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                </div>
                            </div>
                            <div className=' w-full justify-center sm:justify-end sm:w-6/12 px-[12px] flex  xl:px-0 mt-4 sm:mt-[20px]'>
                                <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] max-w-[400px] w-full flex flex-col'>
                                    <p className=' opacity-70 text-black max-w-[328px] font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                    <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Darrell Steward-Head</p>
                                    <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className=' z-10 pointer-events-none hidden d_block absolute left-[-20%] bottom-[-30%] max-w-[212px] w-full' src={elipse10} alt="elipse" />
                    <img className=' absolute top-[10%] max-md:hidden xl:top-[20%] right-[0%] lg:right-[4%]' src={sliderblue} alt="blue-elipse" />

                </div>
                <img className=' z-10 pointer-events-none d_none absolute left-[0px] max-md:hidden lg:left-[20px] xl:left-[142px] bottom-[15px] lg:bottom-[18px] max-w-[212px] w-full' src={elipse10} alt="elipse" />

            </section>
        </>
    )
}

export default OurClients