import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Table } from '@/components/Table'
import { LessonsType } from '@/types/lessons'
import { getLessonsWithMembers } from '@/utils/api/lessons/get'
import { useEffect, useState } from 'react'

export const ProductsTable = () => {
  const [lessons, setLessons] = useState<LessonsType[] | null>(null)
  const [queryResultLimit, setQueryResultLimit] = useState<number>(2)
  const [offSetQueryResults, setOffSetQueryResults] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchLessonsWithAuthor = async(limit:number, offset:number) => {
    const lessonsFromBackEnd = await getLessonsWithMembers(limit, offset)
    console.log(lessonsFromBackEnd)
    setLessons(lessonsFromBackEnd.lessonWithAuthors)
    setIsLoading(false)
  }
  

  useEffect(() => {
    setIsLoading(true)
    fetchLessonsWithAuthor(queryResultLimit, offSetQueryResults)
  },[])

  if(isLoading) return <LoadingSpinner/>
  return (
    <div className='overflow-x-scroll'>
      <Divider className='mt-4 mb-8'/>

      <Table titles={[
        {name:'Produto', width:'70%'}, 
        {name:"Total",   width:'30%'},
      ]}>
        {lessons && lessons.length > 0 && lessons.map((lessonData, i) =>(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==lessons.length-1? 'border-b':'')}>
            <td className='w-[70%] min-w-[120px]'>{new Date(lessonData.lesson.lesson_updated_at).toLocaleDateString('pt-BR')}</td>
            <td className='w-[30%] min-w-[120px]'>{lessonData.author.author_first_name} {lessonData.author.author_last_name}</td>
          </tr>
        ))}
        <tr className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' }>
          <td className='w-[70%] min-w-[120px] font-bold text-medium-blue-phs-system'>{'Total'}</td>
          <td className='w-[30%] min-w-[120px] font-bold text-black'>{'R$ 3000,00'}</td>
        </tr>
      </Table>
    </div>
  )
}
