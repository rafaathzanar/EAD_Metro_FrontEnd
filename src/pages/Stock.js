import React from 'react'
import StockOverview from '../components/StockOverView'
import StockCatagories from '../components/StockCatagories'

function Stock({stockOverviewData}) {

  const categories = [
    'Apple Products',
    'Mobile Phones',
    'Spectacles Frames',
    'Lenses',
    'Phone Accessories',
    'Watches',
    'Speakers',
    'Others',
  ];




  return (
    <div>
        <StockOverview data={stockOverviewData}/>
        <StockCatagories categories={categories}/>
    </div>
  )
}

export default Stock
