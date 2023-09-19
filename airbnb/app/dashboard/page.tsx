import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Navbar from '@/components/base/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { getS3ImageUrl } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LucideEye } from 'lucide-react'
import DeleteHomeBtn from '@/components/DeleteHomeBtn'
import { ToastContainer } from 'react-toastify'
import Link from 'next/link'


async function page() {
    const supabase = createServerComponentClient({ cookies });
    const user = await supabase.auth.getUser();
    const { data: homes, error } = await supabase.from("homes").select("id, image, title, country, state, city, price, description, categories, created_at").eq("user_id", user?.data?.user?.id);
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <div className='container mt-5'>
                <Table>
                    <TableCaption>Your added homes</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Categories</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {homes && homes.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.title}</TableCell>
                                <TableCell>{item.country}</TableCell>
                                <TableCell>{item.state}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>
                                    <Image src={getS3ImageUrl(item.image)} alt="homes image" width={50} height={50} className='rounded-md shadow-sm hover:shadow-lg' unoptimized />
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell dangerouslySetInnerHTML={{ __html: item.description }}>

                                </TableCell>
                                <TableCell>{item.categories.join(', ')}</TableCell>
                                <TableCell className='flex flex-row items-center justify-center space-x-2 text-sm'>
                                    <DeleteHomeBtn id={item.id} />

                                    <Link href={`/home/${item.id}`}>
                                        <Button className='bg-green-600 hover:bg-green-400' size="icon" variant="destructive">
                                            <LucideEye />
                                        </Button>
                                    </Link>

                                </TableCell>
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </div>

        </div>
    )
}

export default page
