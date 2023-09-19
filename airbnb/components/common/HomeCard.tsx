import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getS3ImageUrl } from '@/lib/utils'
import { LucideBadgeIndianRupee, LucideIndianRupee } from 'lucide-react'

function HomeCard({ home }: { home: any }) {
  return (
    <Link href={`/home/${home.id}`}>
      <div>
        <Image src={getS3ImageUrl(home.image)} width={250} height={250} alt='Homes-images' className='w-full object-cover rounded-xl h-[300px] object-center mb-2' unoptimized/>
        <p className='font-extrabold text-xl mb-2'>{home.title}</p>
        <p className='font-semibold'>{home?.city}, {home?.state}</p>
        <p className='font-extralight'>{home?.country}</p>


        <p className='text-green-600 flex items-center justify-start text-xl font-bold mt-2'>
          {home.price}
          <LucideIndianRupee className='text-sm' />
        </p>
      </div>
    </Link>
  )
}

export default HomeCard
