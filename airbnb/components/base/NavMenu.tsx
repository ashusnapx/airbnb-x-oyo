import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LogIn, Menu, SignalZero, User2Icon } from 'lucide-react'
import LoginModal from '../auth/LoginModal'
import SignUpModal from '../auth/SignUpModal'
import SignOutBtn from '../common/SignOutBtn'
import Link from 'next/link'


function NavMenu({ session }: { session: object | undefined }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className='mr-6 mt-3 hover:shadow-lg'>
                <ul>
                    {session != undefined ?
                        (<>
                            <Link href="/dashboard">
                                <li className='hover:bg-gray-200 rounded-md cursor-pointer p-2' >
                                    Dashboard
                                </li>
                            </Link>
                            
                            <SignOutBtn />
                        </>) :
                        (<>
                            <SignUpModal />
                            <LoginModal />
                        </>)}

                </ul>
            </PopoverContent>
        </Popover>

    )
}

export default NavMenu
