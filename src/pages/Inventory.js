import React from 'react'
import StockOverview from '../components/StockOverView'
import InventoryStockList from '../components/InventoryStockList'

function Inventory({stockOverviewData}) {
  return (
    <div>
      <StockOverview data={stockOverviewData}/>
      <InventoryStockList />
    </div>
  )
}

export default Inventory
