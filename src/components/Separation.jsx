import React from 'react'
import CommonBtn from '../common/CommonBtn'
import sliderelipse from '../assets/webp/slider-elipse.webp'
import elipse6 from '../assets/webp/elipse6.webp'
import elipse7 from '../assets/webp/elipse7.webp'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from '../assets/icon';
const Separation = () => {
    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'linear',
                    arrows: false,
                }
            }
        ],
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0" }} className="custom-dots">
                    {dots}
                </ul>
            </div>
        ),
    };
    return (
        <>
            <section className='pt-[48px] pb-[48px] md:pt-[80px] md:pb-[80px] lg:pt-[302px] lg:pb-[186px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-wrap justify-between mx-[-12px] flex-row'>
                        <div className=' w-full flex justify-center lg:justify-start lg:w-5/12 px-[12px]'>
                            <div className=' flex flex-col pt-[36px]'>
                                <p className=' text-black ff-hel font-[400] text-[24px] md:text-[29px] leading-[25px] md:leading-[37px] text-center lg:text-start'>THE FOUR PHASES OF</p>
                                <h2 className=' ff-hel font-[400] text-[32px] sm:text-[45px] md:text-[52px] leading-[45px] md:leading-[62px] text-black text-center lg:text-start max-md:pt-[10px]'>SEPARATION <span className=' text-orange lg:block'>MINDSET</span></h2>
                                <p className=' lg:max-w-[484px] font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] opacity-70 text-black pt-[10px] md:pt-[19px] text-center lg:text-start'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                                <div className=' flex justify-center lg:justify-start pt-[26px] md:pt-[36px]'>
                                    <CommonBtn />
                                </div>
                            </div>
                        </div>
                        <div className=' w-full lg:w-7/12 max-lg:mt-[48px]  px-[12px] '>
                            <Slider {...settings1} className=' relative '>
                                <div className=' !flex justify-center lg:!justify-end'>
                                    <div className=' max-w-[608px] w-full bg-blue  min-h-[290px] lg:min-h-[448px]  !flex !flex-col !items-center !justify-center  p-5 relative '>
                                        <div className='flex flex-col lg:pb-20 z-20'>
                                            <p className=' capitalize font-Poppins font-[500] text-[20] leading-[28px] md:leading-[32px] text-white text-center'>1st phase <span className='block'>"The not-wanting-to-be-true"</span></p>
                                            <p className=' text-white text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[364px] pt-[10px] md:pt-[15px]'>This phase is characterized by denial and ignoring the final separation.</p>
                                        </div>
                                        <img className='max-w-[382px] z-10 w-full absolute right-0 bottom-0' src={sliderelipse} alt="elipse" />
                                    </div>
                                </div>
                                <div className=' !flex justify-center lg:!justify-end'>
                                    <div className=' max-w-[608px] w-full bg-blue  min-h-[290px] lg:min-h-[448px]  !flex !flex-col !items-center !justify-center  p-5 relative '>
                                        <div className='flex flex-col lg:pb-20 z-20'>
                                            <p className=' capitalize font-Poppins font-[500] text-[20] leading-[28px] md:leading-[32px] text-white text-center'>2nd phase <span className='block'>"sales mindset"</span></p>
                                            <p className=' text-white text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[364px] pt-[10px] md:pt-[15px]'>Nervousness and feelings of guilt in the sales talk are the reason for poor performance, learn to put them aside and calmly convince your customers.</p>
                                        </div>
                                        <img className='max-w-[382px] z-10 w-full absolute right-0 bottom-0' src={sliderelipse} alt="elipse" />
                                    </div>
                                </div>
                                <div className=' !flex justify-center lg:!justify-end'>
                                    <div className=' max-w-[608px] w-full bg-blue  min-h-[290px] lg:min-h-[448px]  !flex !flex-col !items-center !justify-center  p-5 relative '>
                                        <div className='flex flex-col lg:pb-20 z-20'>
                                            <p className=' capitalize font-Poppins font-[500] text-[20] leading-[28px] md:leading-[32px] text-white text-center'>3rd phase <span className='block'>"CEO Mindset"</span></p>
                                            <p className=' text-white text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[364px] pt-[10px] md:pt-[15px]'>Constant stress and enormous pressure as a founder is not normal, but the result of a wrong perspective on productive work. Learn how to get the maximum performance out of yourself without stress.</p>
                                        </div>
                                        <img className='max-w-[382px] z-10 w-full absolute right-0 bottom-0' src={sliderelipse} alt="elipse" />
                                    </div>
                                </div>
                                <div className=' !flex justify-center lg:!justify-end'>
                                    <div className=' max-w-[608px] w-full bg-blue  min-h-[290px] lg:min-h-[448px]  !flex !flex-col !items-center !justify-center  p-5 relative '>
                                        <div className='flex flex-col lg:pb-20 z-20'>
                                            <p className=' capitalize font-Poppins font-[500] text-[20] leading-[28px] md:leading-[32px] text-white text-center'>4th phase <span className='block'>"Business Mindset"</span></p>
                                            <p className=' text-white text-center font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[364px] pt-[10px] md:pt-[15px]'>Nervousness and feelings of guilt in the sales talk are the reason for poor performance, learn to put them aside and calmly convince your customers.</p>
                                        </div>
                                        <img className='max-w-[382px] z-10 w-full absolute right-0 bottom-0' src={sliderelipse} alt="elipse" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <img className='z-10 pointer-events-none hidden d_block absolute left-[-40%]  bottom-[115%] rotate-12 max-w-[515px]' src={elipse6} alt="elipse" />
                    <img className='z-10 pointer-events-none hidden d_block max-w-[204px] elipse-7 w-full  right-[-20%] top-[-65%] absolute' src={elipse7} alt="elipseF" />
                </div>
                <img className='z-10 pointer-events-none d_none absolute left-0 top-[-55%] md:top-[-50%] lg:top-[-35%] max-w-[515px]' src={elipse6} alt="elipse" />
                <img className='z-10 pointer-events-none d_none max-w-[204px] elipse-7 w-full max-md:hidden  right-[10px] 2xl:right-[144px] top-[20%] lg:top-[10px] absolute' src={elipse7} alt="elipseF" />
            </section>
        </>
    )
}

export default Separation