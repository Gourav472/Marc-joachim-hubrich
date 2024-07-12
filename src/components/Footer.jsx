import React from 'react'
import facebook from '../assets/svg/akar-icons_facebook-fill.svg'
import twitter from '../assets/svg/ant-design_twitter-circle-filled.svg'
import mail from '../assets/svg/ic_baseline-Mail.svg'
import insta from '../assets/svg/ph_instagram-logo-light.svg'
import footerlayer from '../assets/webp/footer-elipse.webp'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <footer className=' bg-blue py-[48px] md:py-[68px] lg:py-[94px] relative'>
                <div className=' container relative z-20'>
                    <div className=' flex max-xl:mx-auto  xl:justify-end'>
                        <div className=' justify-between max-sm:items-end items-center xl:items-end w-full xl:max-w-[700px] flex'>
                            <p className=' max-w-[264px] text-center font-Poppins font-[400] text-[16px] leading-[25px] text-white cursor-pointer'>(c){year} MARC JOACHIM HUBRICH
                                All Rights Reserved</p>
                            <div className=' flex max-sm:flex-col xl:flex-col gap-3'>
                                <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank' className=' hover:scale-110 duration-300 ease-linear'><img src={facebook} alt="facebook" /></a>
                                <a href="https://x.com/?lang=en" target='_blank' className=' hover:scale-110 duration-300 ease-linear'><img src={twitter} alt="twitter" /></a>
                                <a href="https://mail.google.com/" target='_blank' className=' hover:scale-110 duration-300 ease-linear'><img src={mail} alt="mail" /></a>
                                <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' className=' hover:scale-110 duration-300 ease-linear'><img src={insta} alt="instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className=' max-w-[1619px] w-full absolute bottom-0 left-0 z-10' src={footerlayer} alt="layer" />
            </footer>
        </>
    )
}

export default Footer