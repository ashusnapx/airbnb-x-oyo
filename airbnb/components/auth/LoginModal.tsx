"use client";
import React,{useState} from 'react'
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
import { Ghost, GithubIcon, X } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginType, RegisterType, loginSchema } from '@/validations/authSchema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';
import SocialBtns from './SocialBtns';


function LoginModal() {

    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const supabase = createClientComponentClient();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (payload: LoginType) => {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password,
        })
        // console.log("hola amigo", data);
        setLoading(false);
        if (error)
        {
            toast.error(error.message, { theme: "colored" });
        }
        else if (data.user)
        {
            setOpen(false);
            toast.success("Logged in successfully 🥳", { theme: "colored" });
            router.refresh();
        }
    }

    return (
        <>
            <ToastContainer />
            <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <li className='hover:bg-gray-200 rounded-md cursor-pointer p-2' onClick={() => setOpen(true)}>
                    Log in
                </li>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle asChild>
                        <div className='flex justify-between items-center'>
                            <span className='font-extrathin'>Log in</span>
                            <span className='cursor-pointer'><X onClick={() => setOpen(false)}/></span>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {/* <ToastContainer/> */}
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-xl font-bold text-brand'>Welcome to Airbnb</h1>
                                <div className='mt-5'>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input placeholder='Enter your email id here...' id='email' type="email" {...register("email")} />
                                    <span className='text-red-600'>
                                        {errors.email?.message}
                                    </span>
                                </div>
                                <div className='mt-5'>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input placeholder='Enter your password here...' id='password' type="password" {...register("password")} />
                                    <span className='text-red-600'>
                                        {errors.password?.message}
                                    </span>
                                </div>
                                <div className='mt-5'>
                                    <Button className='bg-brand w-full' disabled={loading}>{loading ? "Processing..." : "Continue"}</Button>
                                </div>

                                <div className='mt-5 font-extrabold text-lg'>
                                    <h1 className='text-center'> -- OR --</h1>
                                </div>
                                </form>
                                <SocialBtns />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
}

export default LoginModal
