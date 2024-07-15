import React from 'react'
import elipse3 from '../assets/webp/elipse3.webp'
const YourFault = () => {
    return (
        <>
            <section className=' pt-[48px] md:pt-[80px] lg:pt-[151px] pb-[34px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex flex-col items-center '>
                        <div className=' flex flex-col md:flex-row md:gap-[35px]  lg:gap-[61px]'>
                            <div data-aos="fade-right" className=' 2xl:ps-[130px]  flex gap-[15px] justify-center md:justify-start  md:gap-0 md:flex-col'>
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
                    <div className=' pointer-events-none flex items-end rotate-90 xl:rotate-0 max-md:hidden left-[22%] bottom-[90%] lg:left-[20%]  absolute xl:left-0 lg:bottom-[90%]'>
                        <div className=' flex relative items-center flex-col gap-[11px]'>
                            <p className=' text-black font-Poppins font-[300] text-[20px] leading-[34px] -rotate-90'>MJH</p>
                            <span className=' h-[269px] w-[2px] bg-orange'></span>
                            <div className=' bottom-0 left-[20px] absolute flex items-end'>
                                <span className=' w-[26px] h-[2px] bg-orange'></span>
                                <p className=' max-xl:hidden text-black ff-hel font-[400] text-[40px] leading-[30px] -rotate-90'>01</p>
                                <p className=' max-xl:hidden uppercase text-black ff-hel font-[400] text-[24px] leading-[15px] '>fault</p>
                                <div className='xl:hidden flex-col flex gap-14'>
                                    <p className=' text-black ff-hel font-[400] text-[40px] leading-[30px] -rotate-90'>01</p>
                                    <p className=' uppercase text-black ff-hel font-[400] text-[24px] leading-[15px] -rotate-90'>fault</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className=' pointer-events-none absolute d_block hidden right-[-35%]  bottom-[-10%] z-10 max-w-[210px]' src={elipse3} alt="elipse" />

                </div>
                <img className=' pointer-events-none absolute d_none max-md:hidden right-[-5%] lg:right-0 bottom-[-10%] z-10 max-w-[210px]' src={elipse3} alt="elipse" />
            </section>
        </>
    )
}

export default YourFault