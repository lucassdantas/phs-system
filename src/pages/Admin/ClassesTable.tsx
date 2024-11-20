import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { ClassesType } from '@/types/classes'
import { getClasses, getSelectedClassWithMembers } from '@/utils/api/classes/get'
import { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { RxDividerHorizontal } from 'react-icons/rx'

export const ClassesTable = () => {
  const [classes, setClasses] = useState<ClassesType[] | null>(null)
  const [selectedClass, setSelectedClass] = useState<ClassesType | null>(null)
  const [selectedClassOffset, setSelectedClassOffset] = useState<number>(0)
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

  const fetchMembersOfSelectedClass = async(selectedClassId:number, limit:number, offset:number) => {
    const classesFromBackend = await getSelectedClassWithMembers(selectedClassId, limit, offset)
    setClasses(classesFromBackend.classesWithMembers)
    handleTotalPages(classesFromBackend.classQuantities)
  }

  const fetchAllClasses = async(limit:number, offset:number) => {
    const classesFromBackend = await getClasses(limit, offset)
    setClasses(classesFromBackend.classes)
    handleTotalPages(classesFromBackend.classQuantity)
    setIsLoading(false)
  }

  const handleViewClass = (pupilClass:ClassesType | null, popupOpen:boolean) => {
    if(pupilClass) fetchMembersOfSelectedClass(pupilClass.class_id, queryResultLimit, selectedClassOffset)
    setSelectedClass(pupilClass)
    setIsPopupOpen(popupOpen)
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
    <div className='overflow-x-scroll'>
      <div className='w-full flex justify-end items-center space-x-4'>
        <FaLongArrowAltLeft  className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system' size={28} onClick={() => handlePageChange(currentPage-1)}/>
        <span>{currentPage}/{totalPages}</span>
        <FaLongArrowAltRight className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'  size={28}  onClick={() => handlePageChange(currentPage+1)}/>
      </div>
      
      <Divider className='mt-4 mb-8'/>

      <Table titles={[
        {name:'Data',     width:'20%'}, 
        {name:"Endereço", width:'50%'},
        {name:'Vagas',    width:'10%'},
        {name:'Detalhes', width:'20%'}
      ]}>
        {classes && classes.length > 0 && classes.map((pupilClass, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==classes.length-1? 'border-b':'')}>
            <td className='w-[20%] min-w-[120px]'>{new Date(pupilClass.class_date).toLocaleDateString('pt-BR')}</td>
            <td className='w-[50%] min-w-[120px]'>{pupilClass.class_address}</td>
            <td className='w-[10%] min-w-[120px]'>{pupilClass.class_vacancies}</td>
            <td className='w-[20%] min-w-[120px]'><Button onClick={() => handleViewClass(pupilClass, true)}/></td>
          </tr>
        ))}
        <Popup isOpen={isPopupOpen} onClose={() => handleViewClass(null, false)}>
          
          <h2 className='text-xl font-bold mb-12'>Turma</h2>
          <p>Data: {new Date(selectedClass?.class_date).toLocaleDateString('pt-BR')}</p>
          <p>Vagas: {selectedClass?.class_vacancies}</p>
          <h3 className='font-bold text-xl mt-6'>Alunos dessa turma</h3>
          <Table titles={[
              {name:'Data',     width:'20%'}, 
              {name:"Endereço", width:'50%'},
              {name:'Vagas',    width:'10%'},
              {name:'Detalhes', width:'20%'}
          ]}>
            {selectedClass && selectedClass.members && selectedClass.members.length > 0 && selectedClass.members.map((classMembers, i) =>(
              <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==selectedClass.members.length-1? 'border-b':'')}>
                <td className='w-[20%] min-w-[120px]'>{new Date(classMembers.class_date).toLocaleDateString('pt-BR')}</td>
                <td className='w-[50%] min-w-[120px]'>{classMembers.class_address}</td>
                <td className='w-[10%] min-w-[120px]'>{classMembers.class_vacancies}</td>
                <td className='w-[20%] min-w-[120px]'><Button onClick={() => handleViewClass(classMembers, true)}/></td>
              </tr>
            ))}
          </Table>
        </Popup>
      </Table>
    </div>
  )
}
