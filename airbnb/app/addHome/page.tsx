import Navbar from '@/components/base/Navbar'
import Counter from '@/components/common/Counter'
import { generateRandom } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import AddHomeForm from '@/components/Form/AddHomeForm'
import { LucideIndianRupee } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddHome() {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <div className='container mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4'>
          <div>
            {/* left side */}
            <h1 className='text-6xl font-bold'>Welcome to <span className='text-brand font-bold '>Airbnb</span></h1>
            <h2 className='text-3xl font-extralight'>You could earn</h2>
            <div className='flex md:flex-row items-center justify-start space-x-1'>
              <Counter num={generateRandom()} />
              <span className='text-3xl font-bold bg-brand px-2 py-1 rounded-md flex items-center justify-center'> <LucideIndianRupee className='text-3xl font-bold'/> / per night</span>
            </div>

            <div className='flex md:flex-row sm:flex-col items-center justify-start space-x-2 mt-3 '>
              <Image src="https://raw.githubusercontent.com/TusharVashishth/Airbnb_clone/main/public/images/home_img.jpeg" width={200} height={200} alt='home-image' className='rounded-2xl object-cover'/>
              <Image src="https://raw.githubusercontent.com/TusharVashishth/Airbnb_clone/main/public/images/home_img1.jpeg" width={200} height={200} alt='home-image' className='rounded-2xl object-cover' />
            </div>
            
          </div>
          <div>
            {/* right side */}
            <AddHomeForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddHome
