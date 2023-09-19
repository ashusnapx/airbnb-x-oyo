"use client";
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
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
import { Ghost, Github, GithubIcon, X } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RegisterType, registerSchema } from '@/validations/authSchema';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import {useRouter} from 'next/navigation';
import SocialBtns from './SocialBtns';


function SignUpModal() {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const supabase = createClientComponentClient();

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterType>({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = async (payload: RegisterType) => {
        console.log(payload);
        setLoading(true);
        const { data, error } = await supabase.auth.signUp(
            {
                email: payload.email,
                password: payload.password,
                options: {
                    data: {
                        name: payload.name,
                        password: payload.password,
                    }

                },
            }
        );
        setLoading(false);
        if (error) {
            toast.error(error.message, { theme: 'colored' });
        }
        else if (data.user) {
            await supabase.auth.signInWithPassword({
                email: payload.email,
                password: payload.password,
            })
            setOpen(false);
            router.refresh();
            toast.success("Logged in sucessfully!", { theme: "colored" });
        }
    };



    return (

        <>
            {/* <ToastContainer /> */}
            <AlertDialog open={open}>
                <AlertDialogTrigger asChild>
                    <li className='hover:bg-gray-200 rounded-md cursor-pointer p-2 font-semibold' onClick={() => setOpen(true)}>
                        Sign up
                    </li>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle asChild>
                            <div className='flex justify-between items-center'>
                                <span>SignUp</span>
                                <span className='cursor-pointer'><X onClick={() => setOpen(false)} /></span>
                            </div>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                            {/* <ToastContainer /> */}
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className='text-xl font-bold'>Welcome to Airbnb</h1>
                                    <div className='mt-5'>
                                        <Label htmlFor='email'>Name</Label>
                                        <Input placeholder='Enter your name' id='name' {...register("name")} />
                                        <span className='text-red-600'>
                                            {errors.name?.message}
                                        </span>
                                    </div>
                                    <div className='mt-5'>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input placeholder='Enter your email id' id='email' {...register("email")} />
                                        <span className='text-red-600'>
                                            {errors.email?.message}
                                        </span>
                                    </div>
                                    <div className='mt-5'>
                                        <Label htmlFor='password'>Password</Label>
                                        <Input placeholder='Enter your password' id='password' type='password' {...register("password")} />
                                        <span className='text-red-600'>
                                            {errors.password?.message}
                                        </span>
                                    </div>
                                    <div className='mt-5'>
                                        <Label htmlFor='password'>Confirm Password</Label>
                                        <Input placeholder='Confirm your password' id='password' type='password' {...register("password_confirmation")} />
                                        <span className='text-red-600'>
                                            {errors.password_confirmation?.message}
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

export default SignUpModal
