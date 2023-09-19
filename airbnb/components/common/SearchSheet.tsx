"use client";
import React, { useState, useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Search } from 'lucide-react'
import MobileNav from '../base/MobileNav'
import SearchSheetNav from '../base/SearchSheetNav'
import DatePicker from './DatePicker'
import { Button } from '../ui/button'
import { addDays, format, differenceInDays, parse } from "date-fns";
import { useRouter, useSearchParams } from 'next/navigation';

function SearchSheet({ session }: { session: any}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const [search, setSearch] = useState<string>("");
  const [searchedParams, setSearchedParams] = useState({
    country: "",
    days:""
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

    if (difference)
    {
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
    setOpen(()=>false);
  }
  return (
    <div>
      <Sheet open={open}>
        <SheetTrigger asChild>
          <div className='w-full md:w-auto cursor-pointer' onClick={() => setOpen(true)}>
            <div className='hidden md:flex items-center justify-center border rounded-3xl p-2 space-x-2 text-sm'>
              <span className=''>
                {searchedParams.country !== ""
                  ? searchedParams.country.charAt(0).toUpperCase() + searchedParams.country.slice(1)
                  : "Any Country"}
              </span>

              <span> | </span>
              <span> {searchedParams.days != "" ? searchedParams.days : "Any week"}</span>
              <span> | </span>
              <span className=' text-gray-400'>Add Guest</span>
              <span className='bg-brand rounded-full p-1 text-white'><Search height={17} width={17} /></span>
            </div>

            <div className='w-full'>
              <MobileNav session={session} />
            </div>
          
          </div>
        </SheetTrigger>
        <SheetContent side="top" showCloseIcon={true}>
          <SheetHeader>
            <SheetTitle>
              <SearchSheetNav session={session} searchInputCallback={setSearch}/>
            </SheetTitle>
            <SheetDescription>
              <div className='flex justify-center items-center flex-col'>
                <DatePicker state={dateState} dateChangeCallback={handleDateChange} />
                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-5'>
                  <Button className='bg-brand mb-2 md:mb-0 w-full md:w-auto' onClick={handleSubmit}>
                    Search
                  </Button>
                  <Button variant="outline" className='w-full md:w-auto' onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default SearchSheet
