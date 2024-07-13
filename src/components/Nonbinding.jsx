import React from 'react'
import CommonBtn from '../common/CommonBtn'
import Slider from 'react-slick'

const Nonbinding = () => {
    var settings3 = {
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
            <section id='testimonials'>
                <div className=' pt-[30px] md:pt-[71px] bg-[#F2F8FF] pb-[30px] md:pb-[59x] '>
                    <div className=' container'>
                        <div className='  flex flex-wrap lg:flex-nowrap justify-center lg:justify-between'>
                            <div data-aos="fade-right" className=' flex flex-col'>
                                <h2 className=' uppercase ff-hel font-[400] text-[32px] sm:text-[42px] lg:text-[43px] xl:text-[52px] leading-[45px] sm:leading-[55px] md:leading-[66px] text-black  text-center lg:text-start'>Request your</h2>
                                <h2 className=' uppercase ff-hel font-[400] text-[32px] sm:text-[42px] lg:text-[43px] xl:text-[52px] leading-[45px] sm:leading-[55px] md:leading-[66px] text-black  text-center lg:text-start'><span className='  text-orange'>non-binding</span> strategy</h2>
                                <h2 className=' uppercase ff-hel font-[400] text-[32px] sm:text-[42px] lg:text-[43px] xl:text-[52px] leading-[45px] sm:leading-[55px] md:leading-[66px] text-black  text-center lg:text-start'>meeting now!</h2>
                            </div>
                            <div data-aos="fade-left" className=' flex items-center md:ps-4 pt-4 lg:pt-0 gap-[12px]'>
                                <div className=' h-[121px] w-[2px] bg-purple'></div>
                                <p className=' text-black font-Poppins font-[400] text-[14px] md:text-[16px] max-w-[398px] leading-[22px] md:leading-[25px] text-center lg:text-start'>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-non_binding_bg bg-no-repeat bg-cover pt-[48px] pb-[48px] md:pt-[80px] md:pb-[80px] lg:pt-[111px] lg:pb-[186px]'>
                    <div className=' max-md:hidden container'>
                        <div data-aos="fade-right" className='  flex flex-row justify-center flex-wrap mx-[-12px]'>
                            <div  className='w-4/12 px-[12px] flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full flex h-full justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white max-w-[173px]'>How do I let go of my EX so I can finally leave him behind?</p>
                                </div>
                            </div>
                            <div  className='w-4/12 px-[12px] flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full flex h-full justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>How does the divorce process work?</p>
                                </div>
                            </div>
                            <div  className='w-4/12 px-[12px]  lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full flex h-full justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>Do I need a lawyer?</p>
                                </div>
                            </div>

                        </div>
                        <div data-aos="fade-left" className=' flex flex-wrap flex-row mx-[-12px] pt-6 lg:pt-[34px] justify-center'>
                            <div  className=' w-4/12 lg:w-3/12 px-[12px] flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full h-full flex justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>How much will the divorce cost?</p>
                                </div>
                            </div>
                            <div  className=' w-4/12 lg:w-3/12 px-[12px] flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full h-full flex justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>What will happen to my children?</p>
                                </div>
                            </div>
                            <div  className=' w-4/12 lg:w-3/12 px-[12px]  flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full h-full flex justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white max-w-[173px]'>What does my future as a single person look like now?</p>
                                </div>
                            </div>
                            <div  className=' w-full lg:w-3/12 px-[12px] max-lg:mt-[24px] flex lg:px-[0px] max-w-[250px]'>
                                <div className=' max-w-[250px] w-full h-full flex justify-center min-h-[140px] lg:min-h-[200px] bg-[#FFFFFF26] p-[30px_20px] lg:p-[61px_26px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                                    <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white '>How do I rebuild my self-esteem?</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up"  className='  flex justify-center pt-[58px]'>
                            <CommonBtn />
                        </div>
                    </div>
                    <div className=' md:hidden bluebox'>
                    <Slider {...settings3}>
                        <div className=' !w-[250px] flex h-full justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white max-w-[173px]'>How do I let go of my EX so I can finally leave him behind?</p>
                        </div>
                        <div className=' !w-[250px] flex h-full justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>How does the divorce process work?</p>
                        </div>
                        <div className=' !w-[250px] flex h-full justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>Do I need a lawyer?</p>
                        </div>
                        <div className=' !w-[250px] h-full flex justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>How much will the divorce cost?</p>
                        </div>
                        <div className=' !w-[250px] h-full flex justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white'>What will happen to my children?</p>
                        </div>
                        <div className=' !w-[250px] h-full flex justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white max-w-[173px]'>What does my future as a single person look like now?</p>
                        </div>
                        <div className=' !w-[250px] h-full flex justify-center min-h-[120px] sm:min-h-[130px] bg-[#FFFFFF26] items-center p-[26px_20px]  duration-300 ease-linear hover:bg-blue cursor-pointer'>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white '>How do I rebuild my self-esteem?</p>
                        </div>
                    </Slider>
                    <div className=' md:hidden flex justify-center pt-[35px] md:pt-[58px] px-3'>
                        <CommonBtn />
                    </div>
                </div>
                </div>
             
            </section>
        </>
    )
}

export default Nonbinding