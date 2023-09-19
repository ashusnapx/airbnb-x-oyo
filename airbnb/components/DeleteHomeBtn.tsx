"use client"
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
import { Button } from './ui/button'
import { LucideTrash2 } from 'lucide-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Env from '@/config/Env'


function DeleteHomeBtn({ id }: { id: number }) {
    const router = useRouter();
    const supabase = createClientComponentClient();
    const deleteHome = async () => {
        const { data, error } = await supabase.from("homes").delete().eq("id", id);

        if (error) {
            toast.error(error?.message, { theme: "colored" });
            return;
        }
        router.refresh();
        toast.success("Home deleted from servers successfully!", { theme: "colored" });
    }
  return (
      <AlertDialog>
          <AlertDialogTrigger asChild>
              <Button className='bg-red-600 hover:bg-red-400' size="icon" variant="destructive">
                  <LucideTrash2 />
              </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your home from Airbnb servers.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-600' onClick={deleteHome}>Continue</AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

  )
}

export default DeleteHomeBtn
