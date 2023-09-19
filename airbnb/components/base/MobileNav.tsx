"use client"
import { SearchIcon, SlidersHorizontalIcon} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { addDays, format, differenceInDays, parse } from "date-fns";
import { useRouter, useSearchParams } from 'next/navigation';

function MobileNav({ session }: { session: any }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useSearchParams();
    const [search, setSearch] = useState<string>("");
    const [searchedParams, setSearchedParams] = useState({
        country: "",
        days: ""
    });
    // console.log("hello", session)
    const [dateState, setDateState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ]);

    const handleDateChange = (data: any) => {
        setDateState([data?.selection])
    }

    useEffect(() => {
        const difference = differenceInDays(parse(params?.get("endDate")!, "dd-MM-y", new Date()), parse(params?.get("startDate")!, "dd-MM-y", new Date()));

        if (difference) {
            setSearchedParams({
                ...searchedParams,
                country: params.get("country") ? params.get("country")! : "",
                days: `${difference} days`
            })
        }
    }, [params])

    const handleSubmit = () => {
        const startDate = format(dateState[0]?.startDate, "dd-MM-y")
        const endDate = format(dateState[0]?.endDate, "dd-MM-y")
        router.replace(`/?country=${search}&startDate=${startDate}&endDate=${endDate}`);
        setOpen(() => false);
    }
    return (
        <div className='m-3 w-full md:hidden'>
            <div className='flex items-center justify-between border rounded-3xl p-2'>
                <div className='flex items-center'>
                    <SearchIcon />
                    <div className='flex flex-col ml-5'>
                        <h1 className='font-bold'>{searchedParams.country !== ""
                            ? searchedParams.country.charAt(0).toUpperCase() + searchedParams.country.slice(1)
                            : "Any Country"}</h1>
                        
                            <span className='font-extralight text-sm text-brand'> {searchedParams.days != "" ? searchedParams.days : "Any week"}</span>
                    </div>
                </div>
                <div className=''>
                    <SlidersHorizontalIcon />
                </div>
            </div>
        </div>
    )
}

export default MobileNav
