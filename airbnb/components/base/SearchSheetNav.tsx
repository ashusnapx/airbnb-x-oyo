import BrandLogo from './BrandLogo'
import { HomeIcon, LucideSettings} from 'lucide-react'
import NavMenu from './NavMenu'
import Link from 'next/link';
import { Input } from '../ui/input';
import { useState } from 'react';

function SearchSheetNav({ session, searchInputCallback }: { session: any, searchInputCallback: (value: string) => void }) {
    // console.log("this", session);
    
  return (
    <div className=''>
          <div className='m-2 flex flex-row items-center justify-between px-5 py-2 border-b-[1px]'>
              <div className='hidden md:block'>
                  <Link href="/">
                      <BrandLogo />
                  </Link>
              </div>

              <Input className='w-full md:w-1/3 rounded-3xl outline-brand' placeholder='Search by country name...' onChange={(event) => searchInputCallback(event.target.value) } />

              <div className='hidden md:flex items-center justify-center space-x-2' >

                  <Link href="/addHome">
                      <span className='border rounded-3xl p-2 flex items-center justify-center text-sm cursor-pointer space-x-2 hover:shadow-lg'>
                          <span >Add your home</span>
                          <span className='text-brand'><HomeIcon /></span>
                      </span>
                  </Link>



                  <span className='cursor-pointer flex flex-row items-center justify-center space-x-2 border rounded-3xl p-2 ml-2 texy-sm hover:shadow-lg'>
                      <NavMenu session={session} />
                      <LucideSettings className='text-brand text-sm' />
                  </span>
              </div>
          </div>
    </div>
  )
}

export default SearchSheetNav
