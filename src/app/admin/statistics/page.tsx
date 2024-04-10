'use client'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import Doughnutcart from '@/components/Doughnutcart'

import React from 'react'
import LineChart from '@/components/LineChart'

const Page = () => {
    return (
        <>
        <div className='w-50%'>
            <PieChart/>
            <BarChart/>
            <LineChart/>
        </div>
        <div>
            
        </div>
        <div>
            {/* <Doughnutcart/> */}
        </div>
        <div>
            
        </div>
        </>
    )
}

export default Page
