import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ClassesType } from '@/types/classes'
import { getClassChangeRequestsWithMembers } from '@/utils/api/classChangeRequests/get'
import { userImagesDirectory } from '@/utils/constants/siteInfos'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const ClassChangeRequests = () => {
  const [classChangeRequests, setClassChangeRequests] = useState<ClassesType[] | null>(null)
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

  const fetchClassesWithMembers = async(limit:number, offset:number) => {
    const classeChangeRequestsFromBackend = await getClassChangeRequestsWithMembers(limit, offset)
    setClassChangeRequests(classeChangeRequestsFromBackend.classChangeRequestsWithMembers)
    handleTotalPages(classeChangeRequestsFromBackend.class_change_requests_quantity)
    setIsLoading(false)
  }
  
  const handlePageChange = (pageNumber:number) => {
    if(pageNumber > totalPages || pageNumber < 1 ) return;
    setOffSetQueryResults((pageNumber-1)*queryResultLimit)
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchClassesWithMembers(queryResultLimit, offSetQueryResults)
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
      {classChangeRequests && classChangeRequests.length > 0 && classChangeRequests.map((changeRequest, i) =>(
        <div key={i} className={'flex justify-between py-4  text-neutral-700 w-full gap-4' }>
          <div className='w-1/3'><img className='rounded-full w-full aspect-square object-cover' src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Imagem do usuário'/></div>
          <div className='w-2/3'>{changeRequest.user.user_first_name}<br/>solicitou troca de turma</div>
        </div>
      ))}
      {classChangeRequests && classChangeRequests.length == 0 && <span>Nenhuma solicitação encontrada</span>}
    </div>
  )
}
