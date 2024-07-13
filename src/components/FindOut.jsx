import React from 'react'

const FindOut = () => {
    return (
        <>
            <section className=' bg-findout_bg bg-cover bg-no-repeat py-[48px] md:py-[80px] lg:py-[106px]'>
                <div className=' container'>
                    <div data-aos="zoom-in" className=' flex justify-center'>
                        <div className=' max-w-[778px] backdrop-blur-sm flex flex-col items-center bg-[#FFFFFF26] border-[1px] border-[#FFFFFF26] p-[20px_20px] sm:p-[40px_20px] lg:p-[50px_75px_42px_75px] w-full'>
                            <h2 className=' uppercase ff-hel font-[400] text-[32px] sm:text-[36px] md:text-[52px] leading-[45px] md:leading-[62px] text-center text-white'>Are you over your EX?</h2>
                            <p className=' font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px]  md:leading-[25px] text-white text-center pt-[9px] max-w-[585px]'>Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do.</p>
                            <div className=' pt-[25px] md:pt-[31px]'>
                                <button className=' md:py-4 py-2 px-4 md:px-9 btn_webkit bg-white overflow-hidden hover:bg-clip-text text-white hover:text-transparent capitalize relative after:w-full after:h-full after:absolute after:inset-0 after:p-[1.7px] after:bg-gradient-to-custom rounded-[68px] after:rounded-[68px] bg-gradient-to-custom duration-500 group ease-linear '><span className=' hover:bg-clip-text text-white duration-300 ease-linear group-hover:text-transparent font-Inter font-[500] text-[16px] leading-[24px] capitalize hover:text-transparent '>Let’s find it out</span></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FindOut