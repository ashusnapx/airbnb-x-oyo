"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Ghost, GithubIcon, LucideHeartPulse } from 'lucide-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SocialBtns() {
    const supabase = createClientComponentClient();
    const githubLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })

        if (error) {
            toast.error(error.message, { theme: "colored" });
        }
    }
    const googleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })

        if (error) {
            toast.error(error.message, { theme: "colored" });
        }
    }
    return (
        <div>
            <Button variant="outline" className='w-full mt-5' onClick={googleLogin}>
                Continue with Google
                <span className='ml-1'><LucideHeartPulse /></span>
            </Button>
            <Button variant="outline" className='w-full mt-3' onClick={githubLogin}>
                Continue with Github
                <span className='ml-1'><GithubIcon /></span>
            </Button>
        </div>
    )
}

export default SocialBtns
