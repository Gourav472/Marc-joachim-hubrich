import React from 'react'
import message from '../assets/svg/message.svg'
const CommonBtn = () => {
    return (
        <button className=' flex items-center  gap-1  p-[5px_9px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[63px]  duration-500 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full max-w-[240px] md:max-w-[452px]  group bg-white bg-transparent hover:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] '><span><img src={message} alt="message-svg" /></span><span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent group-hover:text-white font-Inter font-[500] text-[14px] md:text-[16px] text-start ps-1 sm:ps-0 leading-[22px] md:leading-[24px] '>Book a non-binding initial consultation now</span></button>
    )
}

export default CommonBtn