import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers';
import Navbar from '@/components/base/Navbar';
import Image from 'next/image';
import { getS3ImageUrl } from '@/lib/utils';

async function FindHome({ params }: { params: { id: number } }) {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.from("homes").select("*, users(metadata->name)").eq("id", params.id);
    // console.log("ok this is your data", home);
    const home:HomesType | null = data?.[0]
  return (
    <div className='mb-10'>
          <Navbar />
          <div className='container mt-5'>
              <h1 className='text-2xl font-bold'>{home?.title}</h1>
              <h2>{home?.city}, {home?.state}, {home?.country}</h2>
              <Image src={getS3ImageUrl(home?.image)} className='mt-3 rounded-lg w-full h-[500px] object-cover object-center' alt="home-image" width={100} height={100} unoptimized />
              
              <h1 className='mt-4 text-2xl font-bold text-brand'>Hosted by {home?.users?.name} 
              </h1>
              <p className='text-xl mt-2 font-extralight'>
                  {home?.title}
              </p>

              <div className='mt-5' dangerouslySetInnerHTML={{__html: home?.description}}>
                  {/* {home?.description} */}
              </div>
          </div>
    </div>
  )
}

export default FindHome
