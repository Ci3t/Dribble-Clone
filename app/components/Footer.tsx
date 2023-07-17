import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'


const FooterColumn = ()=> (
  <div className='footer_column'>
    <h4 className='font-semibold'>Title</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      Links
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
<Image 
src='/logo-pink.svg'
width={115}
height={38}
alt='Devibble'/>
<p className=' text-start text-sm font-normal mt-5 max-w-xs'>
  Devibble is a growing community for Senior and Junior Developers to Share, Grow and get hired
</p>
        </div>
        <div className='flex flex-wrap gap-12'>
          {/* //Todo */}
          {/* <FooterColumn title={footerLinks[0].title} link={footerLinks[0].links} /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer