import { Button } from '@/components/Button'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { OrdersType } from '@/types/orders'
import { getOrders } from '@/utils/api/orders/get'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const OrdersTable = () => {
  const [orders, setOrders] = useState<OrdersType[] | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [queryResultLimit, setQueryResultLimit] = useState<number>(5)
  const [offSetQueryResults, setOffSetQueryResults] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(currentPage)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleTotalPages = (classQuantities:number) => {
    const pagesQuantity = (classQuantities/queryResultLimit)
    if(pagesQuantity % 1 != 0 )  return setTotalPages(Math.trunc(pagesQuantity)+1)
    return setTotalPages(pagesQuantity)
  }
  const fetchOrders = async(limit:number, offset:number) => {
    const ordersFromBackEnd = await getOrders(limit, offset)
    setOrders(ordersFromBackEnd.ordersData)
    handleTotalPages(ordersFromBackEnd.ordersQuantity)
    setIsLoading(false)
  }
  
  const handlePageChange = (pageNumber:number) => {
    if(pageNumber > totalPages || pageNumber < 1 ) return;
    setOffSetQueryResults((pageNumber-1)*queryResultLimit)
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchOrders(queryResultLimit, offSetQueryResults)
  },[currentPage])
  console.log(orders)

  if(isLoading) return <LoadingSpinner/>
  return (
    <div className='overflow-x-scroll'>
      <div className='w-full flex justify-end items-center space-x-4'>
        <FaLongArrowAltLeft  className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system' size={28} onClick={() => handlePageChange(currentPage-1)}/>
        <span>{currentPage}/{totalPages}</span>
        <FaLongArrowAltRight className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'  size={28}  onClick={() => handlePageChange(currentPage+1)}/>
      </div>
      
      <div className='mt-4 mb-8'></div>

      <Table titles={[
        {name:'Pedido', width:'20%'}, 
        {name:"Data",   width:'20%'},
        {name:'Status', width:'20%'},
        {name:'Total',  width:'20%'},
        {name:'Detalhes', width:'20%'},
      ]}>
        {orders && orders.length > 0 && orders.map((ordersData, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==orders.length-1? 'border-b':'')}>
            <td className='w-[20%] min-w-[120px]'>{ordersData.order_id}</td>
            <td className='w-[20%] min-w-[120px]'>{new Date(ordersData.order_date).toLocaleDateString('pt-BR')}</td>
            <td className='w-[20%] min-w-[120px]'>{ordersData.payment_status}</td>
            <td className='w-[20%] min-w-[120px]'>{ordersData.total_amount}</td>
            <td className='w-[20%] min-w-[120px]'><Button content='Visualizar' onClick={() => setIsPopupOpen(true)}/></td>
          </tr>
        ))}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <h2>Pedido</h2>
        </Popup>
      </Table>
    </div>
  )
}
