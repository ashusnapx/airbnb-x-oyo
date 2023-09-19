"use client";
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Toast from './Toast';


function SignOutBtn() {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const logout = async () => {
        await supabase.auth.signOut();
        router.refresh();
    }
  return (
      <AlertDialog>
          <AlertDialogTrigger asChild>
              <li className='hover:bg-gray-200 rounded-md cursor-pointer p-2' >
                  Logout
              </li>
          </AlertDialogTrigger>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure about logout?</AlertDialogTitle>
                  <AlertDialogDescription>
                      Logging out will end your current session.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-600 hover:bg-red-400' onClick={logout}>Continue</AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

  )
}

export default SignOutBtn
