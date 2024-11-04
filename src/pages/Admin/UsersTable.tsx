import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { UsersType } from '@/types/users'
import { getUsers } from '@/utils/api/users/get'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const UsersTable = () => {
  const [users, setUsers] = useState<UsersType[] | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [queryResultLimit, setQueryResultLimit] = useState<number>(5)
  const [offSetQueryResults, setOffSetQueryResults] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(currentPage)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleTotalPages = (classQuantities:number) => {
    const pagesQuantity = (classQuantities/queryResultLimit)
    if(pagesQuantity % 2 != 0)  return setTotalPages(Math.trunc(pagesQuantity)+1)
    return setTotalPages(pagesQuantity)
  }

  const fetchAllUsers = async(limit:number, offset:number) => {
    const usersFromBackend = await getUsers(limit, offset)
    console.log(usersFromBackend)
    setUsers(usersFromBackend.users)
    handleTotalPages(usersFromBackend.usersQuantity)
    setIsLoading(false)
  }

  
  const handlePageChange = (pageNumber:number) => {
    if(pageNumber > totalPages || pageNumber < 1 ) return;
    setOffSetQueryResults((pageNumber-1)*queryResultLimit)
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchAllUsers(queryResultLimit, offSetQueryResults)
  },[currentPage])

  if(isLoading) return <LoadingSpinner/>
  return (
    <div className='overflow-x-scroll'>
      <div className='w-full flex justify-end items-center space-x-4'>
        <FaLongArrowAltLeft  className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system' size={28} onClick={() => handlePageChange(currentPage-1)}/>
        <span>{currentPage}/{totalPages}</span>
        <FaLongArrowAltRight className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'  size={28}  onClick={() => handlePageChange(currentPage+1)}/>
      </div>
      
      <Divider className='mt-4 mb-8'/>

      <Table titles={[
        {name:'N°',     width:'20%'}, 
        {name:"Nome",    width:'60%'},
        {name:'Detalhes', width:'20%'}
      ]}>
        {users && users.length > 0 && users.map((user, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==users.length-1? 'border-b':'')}>
            <td className='w-[20%] min-w-[120px]'>{user.user_id}</td>
            <td className='w-[60%] min-w-[120px]'>{user.first_name} {user.last_name} </td>
            <td className='w-[20%] min-w-[120px]'><Button onClick={() => setIsPopupOpen(true)}/></td>
          </tr>
        ))}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <h2>Usuário</h2>
        </Popup>
      </Table>
    </div>
  )
}
