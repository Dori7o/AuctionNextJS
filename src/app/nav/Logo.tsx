'use client'

import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { useParamsStore } from '../../../hooks/useParamsStore'

export default function Logo() {
    const restore = useParamsStore(state => state.reset);
  return (
    <div onClick={restore} className='cursor-pointer flex items-center gap-2 text-3xl  font-semibold text-red-500'>
        <AiOutlineCar size={34}/>
        <div>Carsties Auction </div>
      </div>
  )
}
