import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { UsersType } from '@/types/users'
import { getUsersByRole } from '@/utils/api/users/get'
import { userImagesDirectory } from '@/utils/constants/siteInfos'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const InstructoresList = () => {
  const [users, setUsers] = useState<UsersType[] | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [queryResultLimit, setQueryResultLimit] = useState<number>(6)
  const [offSetQueryResults, setOffSetQueryResults] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(currentPage)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleTotalPages = (usersQuantity:number) => {
    const pagesQuantity = (usersQuantity/queryResultLimit)
    if(pagesQuantity % 1 != 0 )  return setTotalPages(Math.trunc(pagesQuantity)+1)
    return setTotalPages(pagesQuantity)
  }

  const fetchAllUsers = async(limit:number, offset:number) => {
    const usersFromBackend = await getUsersByRole('instructor', limit, offset)
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
        <FaLongArrowAltLeft  className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'  size={28} onClick={() => handlePageChange(currentPage-1)}/>
        <span>{currentPage}/{totalPages}</span>
        <FaLongArrowAltRight className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'  size={28}  onClick={() => handlePageChange(currentPage+1)}/>
      </div>
      <Divider className='mt-4 mb-8'/>
      <div className='flex flex-wrap'>
        {users && users.length > 0 && users.map((user, i) =>(
          <div key={i} className={'flex flex-col w-1/2 items-center py-4  text-neutral-700' }>
            <div><img  className='rounded-full w-full aspect-square object-cover' src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Imagem do usuário'/></div>
            <div><span className='font-bold'>{user.first_name}</span></div>
            <div><span className='cursor-pointer'>Editar</span></div>
          </div>
        ))}
      </div>
      {users && users.length == 0 && <span>Nenhuma solicitação encontrada</span>}
    </div>
  )
}
