import { Button } from '@/components/Button'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { ClassesType } from '@/types/classes'
import { getClasses, getClassesWithMembers } from '@/utils/api/classes/get'
import { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { RxDividerHorizontal } from 'react-icons/rx'

export const ClassesTable = () => {
  const [classes, setClasses] = useState<ClassesType[] | null>(null)
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

  const fetchClassesWithMembers = async(limit:number, offset:number) => {
    const classesFromBackend = await getClassesWithMembers(queryResultLimit, offSetQueryResults)
    setClasses(classesFromBackend.classesWithMembers)
    handleTotalPages(classesFromBackend.classQuantities)
  }

  const fetchAllClasses = async(limit:number, offset:number) => {
    const classesFromBackend = await getClasses(limit, offset)
    setClasses(classesFromBackend.classes)
    handleTotalPages(classesFromBackend.classQuantity)
    setIsLoading(false)
  }

  
  const handlePageChange = (pageNumber:number) => {
    if(pageNumber > totalPages || pageNumber < 1 ) return;
    setOffSetQueryResults((pageNumber-1)*queryResultLimit)
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchAllClasses(queryResultLimit, offSetQueryResults)
  },[currentPage])
  if(isLoading) return <LoadingSpinner/>
  return (
    <div>
      <div className='w-full flex justify-end items-center space-x-4'>
        <BsArrowLeft className='cursor-pointer text-dark-green-phs-system font-black'  onClick={() => handlePageChange(currentPage-1)}/>
        <span>{currentPage}/{totalPages}</span>
        <BsArrowRight className='cursor-pointer text-dark-green-phs-system font-black' onClick={() => handlePageChange(currentPage+1)}/>
      </div>
      <RxDividerHorizontal accentHeight={1} width='100%' color='green'/>

      <Table titles={[
        {name:'Data',     width:'20%'}, 
        {name:"Endereço", width:'50%'},
        {name:'Vagas',    width:'10%'},
        {name:'Detalhes', width:'20%'}
      ]}>
        {classes && classes.length > 0 && classes.map((pupilClass, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-400 ' + (i==classes.length-1? 'border-b':'')}>
            <td className='w-[20%]'>{new Date(pupilClass.class_date).toLocaleDateString('pt-BR')}</td>
            <td className='w-[50%]'>{pupilClass.class_address}</td>
            <td className='w-[10%]'>{pupilClass.class_vacancies}</td>
            <td className='w-[20%]'><Button onClick={() => setIsPopupOpen(true)}/></td>
          </tr>
        ))}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <h2>Turmas</h2>
        </Popup>
      </Table>
    </div>
  )
}
