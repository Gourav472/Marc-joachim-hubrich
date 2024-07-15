import React, { useEffect, useState } from 'react'
import backToTop from '../assets/webp/icons8-slide-up-64.webp'
const BackToTop = () => {
    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const togglevisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setvisible(true);
        }
        else if (scrolled <= 400) {
            setvisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', togglevisible);
        return () => {
            window.removeEventListener('scroll', togglevisible)
        }
    }, [])

    return (
        <div className=" container relative">
            <div onClick={scrolltotop} className=" fixed z-40 mx-auto  flex items-center justify-center  animate-bounce  bottom-[1%] right-[1%] 2xl:right-[5%] md:bottom-[19%] xl:bottom-[38%] cursor-pointer  duration-300 ease-linear  " style={{ display: visible ? 'grid' : 'none' }}>
                <img src={backToTop} alt="Scroll" className=' max-w-[50px] w-full' />
            </div>
        </div>
    )
}

export default BackToTop