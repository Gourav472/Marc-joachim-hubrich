import React, { useEffect, useState } from 'react'
import phon from '../assets/svg/phon.svg'
import CommonBtn from '../common/CommonBtn';
import elipse1 from '../assets/webp/elipse1.webp'
const HeroSection = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                document.body.style.overflow = show ? "visible" : "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [show]);

    const handleClick = (e) => {
        if (window.innerWidth < 992) {
            setShow(!show);
        } else {
            e.preventDefault();
        }
    };
    return (
        <>
            <section className=' md:bg-[url(../src/assets/webp/Hero-bg.webp)] md:bg-no-repeat md:bg-cover relative '>
                <div className=' container relative z-50'>
                    <div className=' flex justify-between items-center pt-6'>
                        <h2 className=' text-black ff-hel font-[900] text-2xl cursor-pointer'>Logo</h2>
                        <ul className={`ps-0 mb-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-lg:fixed max-lg:justify-center top-0 max-lg:-right-full max-lg:z-[90] max-lg:h-screen max-lg:w-full max-lg:duration-500 ease-linear max-lg:bg-white ${show ? "" : " !right-0"}`}>
                            <li> <a onClick={handleClick} href="#benefits" className=' opacity-70 ff-hel font-[400] text-[16px] leading-[20px] text-black 2xl:text-white hover:text-blue duration-300 ease-linear'>Benifits</a></li>
                            <li> <a onClick={handleClick} href="#testimonials" className=' opacity-70 ff-hel font-[400] text-[16px] leading-[20px] text-black 2xl:text-white hover:text-blue duration-300 ease-linear'>Testimonials</a></li>
                            <li><button className='font-medium text-base leading-6 font-Inter capitalize px-7 py-4 bg-gradient-to-custom text-white rounded-none outline-none border-2 transition-custom duration-300 ease-linear relative border-gradient hover:bg-gradient1 hover:text-transparent hover:bg-clip-text hover:scale-95'>Book Consultation Now</button></li>
                        </ul>
                        <div
                            class={` cursor-pointer relative z-[100] lg:hidden ${show ? "" : "cross"}`}
                            onClick={() => setShow(!show)} >
                            <span class="nav-toggle-items "></span>
                            <span class="nav-toggle-items my-2"></span>
                            <span class="nav-toggle-items "></span>
                        </div>
                    </div>
                    <img className=' pointer-events-none max-w-[450px] hidden d_block z-10 w-full left-[-40%] rotate-90 top-[-10%]  absolute' src={elipse1} alt="elipse" />

                </div>
                <div className=' container  relative z-20'>
                    <div className=' flex flex-col pt-[50px] pb-0 md:pt-[80px] lg:pt-[160px] md:pb-[160px]  lg:pb-[190px]'>
                        <div className=' flex flex-col '>
                            <p className=' ff-hel font-[400] text-[18px] leading-[24px] text-orange text-center md:text-start'>Marc Joachim Hubrich</p>
                            <h2 className=' uppercase text-black ff-hel font-[400] text-[32px] sm:text-[45px] md:text-[60px] leading-[45px] md:leading-[77px]  text-center md:text-start pt-1 md:pt-0'>Now I let you <span className=' md:block'>go!</span></h2>
                            <p className=' md:max-w-[517px] text-black md:opacity-70 font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center md:text-start pt-[16px] md:pt-2'>For women who do not want to be completely dragged down by a SEPARATION.</p>
                            <p className=' md:max-w-[517px] text-black md:opacity-70 font-Poppins font-[400] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-center md:text-start'>How to let go of your EX so you can leave him behind
                                without having to run to a therapist right away.</p>
                            <div className=' flex justify-center md:justify-start items-center gap-[17px] pt-8'>
                                <CommonBtn />
                                <a href="tel:+6494461709"><img className=' cursor-pointer' src={phon} alt="phon-icon" /></a>
                            </div>
                        </div>
                        <div className=' md:absolute pt-[40px]  justify-center  xl:right-[134px] bottom-[45px] flex gap-[45px]'>
                            <div className=' flex items-center gap-3'>
                                <div className=' w-[2px] h-[74px] bg-purple'></div>
                                <ul className=' flex flex-col '>
                                    <li className=' ff-hel font-[400] text-[16px] leading-6 md:leading-[27px] text-black xl:text-white uppercase'>Die wichtigsten</li>
                                    <li className=' ff-hel font-[400] text-[16px] leading-6 md:leading-[27px] text-black xl:text-white uppercase'>Aspekte einer</li>
                                    <li className=' ff-hel font-[400] text-[16px] leading-6 md:leading-[27px] text-black xl:text-white uppercase'>Trennung:</li>
                                </ul>
                            </div>
                            <ul className=' list-disc flex flex-col'>
                                <li className=' ff-hel font-[400] text-[16px] leading-6 md:leading-[27px] text-black xl:text-white capitalize'>physische Trennung</li>
                                <li className=' ff-hel font-[400] text-[16px] leading-6 md:leading-[27px] text-black xl:text-white capitalize'>mentale Trennung</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img className=' pointer-events-none max-w-[450px] d_none z-10 w-full left-[-40%] sm:left-[-20%] md:left-[-10%] top-[0%] xl:left-[0px] absolute' src={elipse1} alt="elipse" />
            </section>
        </>
    )
}

export default HeroSection
