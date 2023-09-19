import React from 'react'
import Image from 'next/image'

function BrandLogo() {
  return (
    <div>
      <Image src="https://raw.githubusercontent.com/TusharVashishth/Airbnb_clone/main/public/images/logo.png" width={120} height={120} alt='brand-logo' className='hidden lg:block' />

      
      <Image src="https://raw.githubusercontent.com/TusharVashishth/Airbnb_clone/main/public/images/logo-sm.png" width={90} height={90} alt='brand-logo' className='lg:hidden'/>
    </div>
  )
}

export default BrandLogo
