import React from 'react'
import elipse2 from '../assets/webp/elipse2.webp'
import elipse3 from '../assets/webp/elipse3.webp'

const YourFault = () => {
    return (
        <>
            <section className=' pt-[48px] md:pt-[80px] lg:pt-[151px] pb-[34px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-col items-center '>
                        <div className=' flex flex-col md:flex-row md:gap-[35px]  lg:gap-[61px]'>
                            <div data-aos="fade-right" className=' 2xl:ps-[130px] p_unset flex gap-[15px] justify-center md:justify-start  md:gap-0 md:flex-col'>
                                <h2 className=' ff-hel  font-[400] text-[32px] sm:text-[45px] md:text-[60px] leading-[45px] md:leading-[77px] text-black text-nowrap'>IT'S NOT</h2>
                                <h2 className='ff-hel  font-[400]  text-[32px] sm:text-[45px] md:text-[60px] leading-[45px] md:leading-[77px] md:ps-[73px] text-orange text-nowrap'><span>YOUR</span> FAULT!</h2>
                            </div>
                            <div data-aos="fade-left" className=' flex justify-center items-center gap-[11px] pt-[20px] md:pt-0'>
                                <div className=' h-[67px] md:h-[100px] lg:h-[67px] w-[2px] bg-purple'></div>
                                <p className=' text-black font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[288px] text-center md:text-start'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                            </div>
                        </div>
                        <p data-aos="fade-left" className=' pt-[30px] md:pt-[58px] capitalize ff-hel font-[700] text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-black text-center'>How would you know when you are busy with completely different things at the moment:</p>
                    </div>
                    <img data-aos="fade-right" className=' pointer-events-none max-w-[160px] w-full d_block z-10 absolute hidden bottom-[200px] left-[-20%] ' src={elipse2} alt="elipse2" />
                    <img className=' pointer-events-none absolute d_block hidden right-[-35%]  bottom-[-10%] z-10 max-w-[210px]' src={elipse3} alt="elipse" />

                </div>
                <img data-aos="fade-right" className=' pointer-events-none max-w-[160px]  w-full d_none z-10 absolute rotate-90 xl:rotate-0 left-[90px] bottom-[170px] max-md:hidden  2xl:bottom-[230px] 2xl:left-[160px]' src={elipse2} alt="elipse2" />
                <img className=' pointer-events-none absolute d_none max-md:hidden right-[-5%] lg:right-0 bottom-[-10%] z-10 max-w-[210px]' src={elipse3} alt="elipse" />
            </section>
        </>
    )
}

export default YourFault