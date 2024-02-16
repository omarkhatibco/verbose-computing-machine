export const getInventoryStats = ({
  forecasted_sales,
  currentStock,
  incomingStock,
  days = 14,
}: {
  forecasted_sales: number
  currentStock: number
  incomingStock: number
  days?: number
}) => {
  const isStockLowerThanForecast = currentStock + incomingStock < forecasted_sales
  const forcastedSalesPerDay = forecasted_sales / days

  const daysToStockout = Math.floor((currentStock + incomingStock) / forcastedSalesPerDay)

  return {
    isStockLowerThanForecast,
    forcastedSalesPerDay,
    daysToStockout,
  }
}
