import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { LessonsType } from '@/types/lessons'
import { getLessonsWithMembers } from '@/utils/api/lessons/get'
import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const LessonsTable = () => {
  const [lessons, setLessons] = useState<LessonsType[] | null>(null)
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
  const fetchLessonsWithAuthor = async(limit:number, offset:number) => {
    const lessonsFromBackEnd = await getLessonsWithMembers(limit, offset)
    console.log(lessonsFromBackEnd)
    setLessons(lessonsFromBackEnd.lessonWithAuthors)
    handleTotalPages(lessonsFromBackEnd.lessonsQuantity)
    setIsLoading(false)
  }
  
  const handlePageChange = (pageNumber:number) => {
    if(pageNumber > totalPages || pageNumber < 1 ) return;
    setOffSetQueryResults((pageNumber-1)*queryResultLimit)
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchLessonsWithAuthor(queryResultLimit, offSetQueryResults)
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
        {name:'Fase',     width:'10%'}, 
        {name:"Aula", width:'30%'},
        {name:'Criado em',    width:'20%'},
        {name:'Modificado em', width:'20%'},
        {name:'Autor', width:'20%'},
        {name:'Detalhes', width:'20%'},
      ]}>
        {lessons && lessons.length > 0 && lessons.map((lessonData, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==lessons.length-1? 'border-b':'')}>
            <td className='w-[10%] min-w-[120px]'>{lessonData.lesson.reffered_phase}</td>
            <td className='w-[30%] min-w-[120px]'>{lessonData.lesson.lesson_title}</td>
            <td className='w-[20%] min-w-[120px]'>{new Date(lessonData.lesson.lesson_created_at).toLocaleDateString('pt-BR')}</td>
            <td className='w-[20%] min-w-[120px]'>{new Date(lessonData.lesson.lesson_updated_at).toLocaleDateString('pt-BR')}</td>
            <td className='w-[20%] min-w-[120px]'>{lessonData.author.author_first_name} {lessonData.author.author_last_name}</td>
            <td className='w-[20%] min-w-[120px]'><Button content='Editar' onClick={() => setIsPopupOpen(true)}/></td>
          </tr>
        ))}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <h2>Aula</h2>
        </Popup>
      </Table>
    </div>
  )
}
