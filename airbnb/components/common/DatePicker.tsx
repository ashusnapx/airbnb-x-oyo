"use client"

import React,{useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns"
import { DateRangePicker, DateRange } from 'react-date-range';

function DatePicker({ state, dateChangeCallback }: { state: any, dateChangeCallback: (data: any) => void }) {

    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: addDays(new Date(), 7),
    //         key:"selection"
    //     }
    // ]);

    // const handleDateChange = (data:any) => {
    //     setState([data?.selection])
    // }
  return (
      <div>
          <div className='hidden md:block'>
              <DateRangePicker
                  onChange={dateChangeCallback}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={state}
                  direction='horizontal'
              />
          </div>
          <div className='md:hidden'>
              <DateRange
                  onChange={dateChangeCallback}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={state}
                  direction='horizontal'
              />
          </div>
          
    </div>
  )
}

export default DatePicker
