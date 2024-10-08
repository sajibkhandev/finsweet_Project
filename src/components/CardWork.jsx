import React from 'react'
import Image from './Image'


const CardWork = ({icon,title,dec}) => {
  return (
    <div className=''>

        <Image src={icon}/>

        <h4 className='text-xl md:text-[32px] text-[#000] font-pop font-medium pt-[8px] pb-[16px]'>{title}</h4>
        <p className='text-sm md:text-base text-[#000] font-pop font-normal md:w-[303px]'>{dec}</p>

    </div>
  )
}

export default CardWork