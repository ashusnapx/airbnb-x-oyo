import BrandLogo from './BrandLogo'
import { HomeIcon, LucideBadgePlus, LucideSettings, LucideSettings2, LucideUser2, LucideUserCheck2, LucideUserPlus, Search, UserCircle2, UserCircle2Icon } from 'lucide-react'
import NavMenu from './NavMenu'
import MobileNav from './MobileNav'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"; 
import Link from 'next/link';
import Image from 'next/image';
import SearchSheet from '../common/SearchSheet';

async function Navbar() {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.auth.getSession();
    // console.log("this is my data", data?.session?.user?.user_metadata);
    return (
        <div className='m-2 flex flex-row items-center justify-between px-5 py-2 border-b-[1px]'>
            <div className='hidden md:block'>
                <Link href="/">
                    <BrandLogo />
                </Link>
            </div>

            <div className='sm:w-full md:w-1/4'>
                <SearchSheet session={data?.session?.user} />
            </div>

           
            
            <div className='hidden md:flex items-center justify-center space-x-2'>
                
                {data?.session?.user?.email && (
                    <span className='hidden md:flex items-center justify-center border border-brand rounded-3xl p-2 space-x-2 text-sm hover:shadow-md'>
                        <span>{data?.session?.user?.user_metadata?.name}</span>

                        {data?.session?.user?.user_metadata?.avatar_url ? (
                            <Image src={data?.session?.user?.user_metadata?.iss} width={30} height={30} alt='user-image' className='rounded-full object-center' />
                        ) : (
                            <span>
                                <LucideUserCheck2 className='text-brand' />
                            </span>
                        )}
                    </span>
                )}


                <Link href="/addHome">
                    <span className='border rounded-3xl p-2 flex items-center justify-center text-sm cursor-pointer space-x-2 hover:shadow-lg'>
                        <span >Add your home</span>
                        <span className='text-brand'><HomeIcon /></span>
                    </span>
                </Link>
                

                
                <span className='cursor-pointer flex flex-row items-center justify-center space-x-2 border rounded-3xl p-2 ml-2 text-sm hover:shadow-lg'>
                    <NavMenu session={data?.session?.user}  />
                    <LucideSettings className='text-brand text-sm' />
                </span>
            </div>
        </div>
    )
}

export default Navbar
