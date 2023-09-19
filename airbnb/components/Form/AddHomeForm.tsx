"use client";
import React, { useState, useEffect } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { countries } from '@/config/countries'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { categories } from '@/config/categories';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AddHomeType, homeSchema } from '@/validations/homeSchema';
import { Button } from '../ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { generateRandom } from '@/lib/utils';
import Env from '@/config/Env';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

function AddHomeForm() {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [categoriesSelected, setCategoriesSelected] = useState<Array<string> | []>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const supabase = createClientComponentClient();
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<AddHomeType>({
        resolver: yupResolver(homeSchema)
    });

    useEffect(() => { 
        setValue("categories", categoriesSelected);
        setValue("description", description);
    }, [description, categoriesSelected]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setValue("image", file);
            
        }
    }

    const onSubmit = async (payload: AddHomeType) => {
        setLoading(true);
        const user = await supabase.auth.getUser();
        const uniquePath = Date.now() + "_" + generateRandom();
        const { data: imageData, error: imageErr } = await supabase.storage.from(Env.S3_BUCKET).upload(uniquePath, image!);

        if (imageErr)
        {
            setLoading(false);
            toast.error(imageErr?.message, { theme: "colored" });
            return;
        }

        const { data:homeData, error:homeError } = await supabase.from("homes").insert({
            user_id: user?.data?.user?.id,
            title:payload.title,
            country: payload.country,
            city: payload.city,
            state: payload.state,
            price: payload.price,
            description: payload.description,
            categories: categoriesSelected,
            image: imageData?.path
        })

        if (homeError) {
            setLoading(false);
            toast.error(homeError?.message, { theme: "colored" });
            return;
        }

        router.refresh();
        router.push("/dashboard?success=Home added successfully");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='mt-5'>
                    <Label htmlFor="title">Title</Label>
                    <Input id='title' placeholder='Enter your title here' className='outline-brand' {...register("title")}></Input>
                    <span className='text-red-600'>{ errors?.title?.message }</span>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="country">Country</Label>
                    <select id="country" className='outline-brand h-10 px-3 py-2 rounded-md w-full border' {...register("country")}>
                        <option value="">-- Select your country --</option>
                        {countries.map((item) => <option value={item.value} key={item.value}>
                            {item.label}
                        </option>)}
                    </select>
                    <span className='text-red-600'>{ errors?.country?.message }</span>
                </div>

                <div className='mt-5'>
                    <Label htmlFor="state">State</Label>
                    <Input id='state' placeholder='Enter your state here' className='outline-brand' {...register("state")}></Input>
                    <span className='text-red-600'>{errors?.state?.message}</span>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="city">City</Label>
                    <Input id='city' placeholder='Enter your city here' className='outline-brand' {...register("city")}></Input>
                    <span className='text-red-600'>{errors?.city?.message}</span>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="price">Price</Label>
                    <Input id='price' placeholder='Enter your price here' className='outline-brand' {...register("price")}  />
                    <span className='text-red-600'>{errors?.price?.message}</span>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="image">Image</Label>
                    <Input id='image' type="file" className='outline-brand cursor-pointer' onChange={handleImageChange}/>
                    <span className='text-red-600'>{errors?.image?.message}</span>
                </div>
                
            </div>

            <div className='mt-5'>
                <Label htmlFor="description">Description</Label>
                <ReactQuill theme="snow" value={description} onChange={setDescription} className='w-full' />
                <span className='text-red-600'>{errors?.description?.message}</span>
            </div>

            <div className='mt-5'>
                <Label htmlFor='categories'>Categories</Label>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3'>
                    {categories.map((item) =>
                        <div key={item.name} className='flex space-x-4 '>
                            <input type='checkbox' id={item.name} value={item.name} checked={(categoriesSelected as string[]).includes(item.name)} onChange={(event) => {
                                if (event.target.checked)
                                {
                                    setCategoriesSelected([...categoriesSelected, item.name]);
                                }
                                else
                                {
                                    const filterCategories = categoriesSelected.filter((item) => item !== event.target.value);
                                    setCategoriesSelected(filterCategories);
                                }
                            }}/>
                            <Label htmlFor={item.name} className='text-sm font-medium'>{item.name}</Label>
                        </div>)}
                </div>
                <span className='text-red-600'>{errors?.categories?.message}</span>
            </div>
            <Button className='mt-5 bg-brand w-full' disabled = {loading}>{loading ? "Adding your place..." : "Rent your place" }</Button>
        </form>
    )
}

export default AddHomeForm
