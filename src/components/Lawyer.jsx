import React from 'react'
import Lawyer1 from '../assets/webp/lawyer.webp'
import longright from '../assets/svg/Arrow-long-right.svg'
import layer1 from '../assets/webp/lawyer-layer.webp'
const Lawyer = () => {
    return (
        <>
            <section className=' pt-[45px] md:pt-[80px] lg:pt-[239px] pb-[48px] md:pb-[80px] lg:pb-[202px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-col-reverse lg:flex-row flex-wrap  mx-[-12px]'>
                        <div data-aos="fade-right" className='w-full z-20 flex justify-center  lg:justify-start mt-[48px] lg:mt-0 lg:w-6/12 px-[12px]'>
                            <img className=' w-full max-w-[450px]  lg:max-w-[559px]' src={Lawyer1} alt="lawyer-img" />
                        </div>
                        <div data-aos="fade-left" className='w-full z-20 lg:w-6/12 justify-center px-[12px] flex lg:justify-end'>
                            <div className=' flex-col flex'>
                                <h2 className=' lg:max-w-[523px] ff-hel font-[400] text-[32px] sm:text-[45px] md:text-[52px] text-black leading-[45px] md:leading-[66px] text-center lg:text-start'>LAWYER <span className=' text-orange'>&</span> DIVORCE COACH</h2>
                                <p className=' uppercase ff-hel font-[400] text-[24px] md:text-[36px] leading-[47px] text-black text-center lg:text-start'><span className=' text-orange'>M</span>arc <span className=' text-orange'>J</span>oachim <span className=' text-orange'>H</span>ubrich</p>
                                <p className=' capitalize ff-hel font-[700] text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-center lg:text-start pt-3 md:pt-[30px]'>About the mindset agency coach</p>
                                <p className=' lg:opacity-70 font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-black lg:max-w-[484px] pt-[12px] text-center lg:text-start'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                                <div className=' pt-[25px] flex justify-center lg:justify-start md:pt-[35px]'>
                                    <button className=' flex items-center gap-2 md:gap-[11px] p-[8px_16px] md:p-[16px_32px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[59px]  duration-300 hover:shadow-5xl hover:scale-95 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full max-w-[300px] md:max-w-[350px]  group bg-white '><span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent  font-Inter font-[500] text-[14px] md:text-[16px] text-start ps-1 sm:ps-0 leading-[22px] md:leading-[24px] '>Learn more about the agency</span><span><img src={longright} alt="arrow" />
                                    </span ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img data-aos="fade-left" className=' pointer-events-none max-w-[738px] hidden d_block max-md:hidden w-full right-[-10%] -bottom-[5%] absolute z-10' src={layer1} alt="layer" />
                    <div className=' pointer-events-none flex items-end max-md:hidden absolute left-0 lg:left-[20px] top-[20%] lg:top-[-40%]'>
                        <div className=' flex relative '>
                            <span className=' h-[167px] w-[2px] bg-orange'></span>
                            <div className=' bottom-0 left-0 absolute flex items-end'>
                                <span className=' w-[26px] h-[2px] bg-orange'></span>
                                <p className=' text-black ff-hel font-[400] text-[40px] leading-[30px] -rotate-90'>05</p>
                                <p className=' uppercase text-black ff-hel font-[400] text-[24px] leading-[15px]'>about</p>
                            </div>
                        </div>
                    </div>
                    <img data-aos="fade-left" className=' pointer-events-none max-w-[738px] -rotate-12 lg:rotate-0 bottom-[45%] lg:bottom-[-20px] max-md:hidden w-full right-[-13%]  absolute z-10' src={layer1} alt="layer" />
                  
                </div>
                <div>
                </div>
            </section>
        </>
    )
}

export default Lawyer