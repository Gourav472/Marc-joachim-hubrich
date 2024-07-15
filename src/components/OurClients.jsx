import React from 'react'
import womenelipse from '../assets/svg/elipse-women.svg'
import sliderblue from '../assets/svg/slider-blue.svg'
import Slider from 'react-slick'
const OurClients = () => {
    const settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        adaptiveHeight: true,
        verticalSwiping: true,
        speed: 1600,
        pauseOnhover: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1200,

        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                <ul
                    style={{ margin: "0" }}
                    className=" flex sm:flex-col custom-dots2 gap-3 justify-center"
                >
                    {dots}
                </ul>
            </div>
        ),
    };
    return (
        <>

            <section className=' pb-[48px] md:pb-[80px] lg:pb-[226px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-col items-center '>
                        <h2 data-aos="zoom-in" className=' uppercase text-center ff-hel text-black font-[400] text-[32px] sm:text-[45px] md:text-[52px] ff-hel leading-[45px] md:leading-[66px]'>What our <span className=' text-orange'>clients</span> say</h2>
                        <div data-aos="zoom-in" className='mx-auto w-full clint'>
                            <Slider {...settings3}>
                                <div className="max-w-[820px] mx-auto flex flex-col items-center">
                                    <div className=' relative mt-[84px] w-full p-[50px_20px_20px_20px] md:p-[58px_50px_32px_49px] flex flex-col shadow-3xl'>
                                        <p className=' opacity-70 max-w-[721px] text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.</p>
                                        <p className=' font-Poppins font-[500] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center pt-4 text-black '>Marrie James-CEO</p>
                                        <p className=' pt-[2px] text-center opacity-70 font-Poppins text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Limana Enterprises, CA</p>
                                        <img className=' pointer-events-none absolute top-[-50px] left-[45%] ' src={womenelipse} alt="women" />
                                    </div>

                                    <div className='flex flex-row 
                                        flex-wrap -mx-[10px] mt-4 sm:mt-[20px]'>
                                        <div className=' w-full sm:w-6/12 px-[10px]'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Ralph Edwards-CEO</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                        <div className=' w-full  sm:w-6/12 px-[10px] mt-[20px] sm:mt-0'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Darrell Steward-Head</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="max-w-[820px] mx-auto flex flex-col items-center">
                                    <div className=' relative mt-[84px] w-full p-[50px_20px_20px_20px] md:p-[58px_50px_32px_49px] flex flex-col shadow-3xl'>
                                        <p className=' opacity-70 max-w-[721px] text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.</p>
                                        <p className=' font-Poppins font-[500] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center pt-4 text-black '>Marrie James-CEO</p>
                                        <p className=' pt-[2px] opacity-70 text-center font-Poppins text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Limana Enterprises, CA</p>
                                        <img className=' pointer-events-none absolute top-[-50px] left-[45%] ' src={womenelipse} alt="women" />
                                    </div>

                                    <div className='flex flex-row 
                                        flex-wrap -mx-[10px] mt-4 sm:mt-[20px]'>
                                        <div className=' w-full sm:w-6/12 px-[10px]'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Ralph Edwards-CEO</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                        <div className=' w-full  sm:w-6/12 px-[10px] mt-[20px] sm:mt-0'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Darrell Steward-Head</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="max-w-[820px] mx-auto flex flex-col items-center">
                                    <div className=' relative mt-[84px] w-full p-[50px_20px_20px_20px] md:p-[58px_50px_32px_49px] flex flex-col shadow-3xl'>
                                        <p className=' opacity-70 max-w-[721px] text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.</p>
                                        <p className=' font-Poppins font-[500] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center pt-4 text-black '>Marrie James-CEO</p>
                                        <p className=' pt-[2px] text-center opacity-70 font-Poppins text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[25px]'>Limana Enterprises, CA</p>
                                        <img className=' pointer-events-none absolute top-[-50px] left-[45%] ' src={womenelipse} alt="women" />
                                    </div>
                                    <div className='flex flex-row 
                                        flex-wrap -mx-[10px] mt-4 sm:mt-[20px]'>
                                        <div className=' w-full sm:w-6/12 px-[10px]'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Ralph Edwards-CEO</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                        <div className=' w-full  sm:w-6/12 px-[10px] mt-[20px] sm:mt-0'>
                                            <div className=' shadow-3xl p-[20px] md:p-[25px_36px_31px_36px] items-center  w-full flex flex-col'>
                                                <p className=' opacity-70 text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                                <p className=' text-black font-Poppins font-[500px] text-center text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[19px]'>Darrell Steward-Head</p>
                                                <p className=' opacity-70 text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] pt-[2px]'>Limana Enterprises, CA</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className=' pointer-events-none flex items-end max-md:hidden absolute right-0 top-[-270px] lg:top-[-212px]'>
                        <div className=' flex relative items-center flex-col gap-[11px] '>
                            <p className=' text-black font-Poppins font-[300] text-[20px] leading-[34px] -rotate-90'>MJH</p>
                            <span className=' h-[201px] w-[2px] bg-orange'></span>
                            <div className=' bottom-0 right-[20px] absolute flex items-end'>
                                <p className=' text-black ff-hel font-[400] text-[40px] leading-[30px] rotate-90'>09</p>
                                <span className=' w-[26px] h-[2px] bg-orange'></span>
                            </div>
                        </div>
                    </div>
                    <div className=' pointer-events-none flex items-end max-md:hidden absolute bottom-[-60px] left-[-4%] lg:bottom-[-200px] lg:left-0'>
                        <div className=' flex relative items-center flex-col gap-[11px]'>
                            <p className=' text-black font-Poppins font-[300] text-[20px] leading-[34px] -rotate-90'>MJH</p>
                            <span className=' h-[269px] w-[2px] bg-orange'></span>
                            <div className=' bottom-0 left-[20px] absolute flex items-end'>
                                <span className=' w-[26px] h-[2px] bg-orange'></span>
                                <p className=' text-black ff-hel font-[400] text-[40px] leading-[30px] -rotate-90'>07</p>
                                <p className=' uppercase text-black ff-hel font-[400] text-[24px] leading-[15px] text-nowrap'>take step</p>
                            </div>
                        </div>
                    </div>
                    <img data-aos="fade-left" className=' absolute top-[10%] max-md:hidden xl:top-[20%] right-[0%] lg:right-[4%]' src={sliderblue} alt="blue-elipse" />
                </div>
            </section>
        </>
    )
}

export default OurClients