import { Button } from '@/components/Button'
import { Popup } from '@/components/Popup'
import { Table } from '@/components/Table'
import { ClassesType } from '@/types/classes'
import { getClassesWithMembers } from '@/utils/api/classes/get'
import React, { useEffect, useState } from 'react'

export const ClassesTable = () => {
  const [classes, setClasses] = useState<ClassesType[] | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [queryResultLimit, setQueryResultLimit] = useState<number>(3)
  const [offSetQueryResults, setOffSetQueryResults] = useState<number>(0)

  const sumToQueryLimits = (newLimitToPlus:number, newOffsetToPlus:number) => {
    setQueryResultLimit(queryResultLimit+newLimitToPlus)
    setOffSetQueryResults(offSetQueryResults+newOffsetToPlus)
  }
  const fetchClassesWithMembers = async(newLimitToPlus:number, newOffsetToPlus:number) => {
    const classesFromBackend = await getClassesWithMembers(queryResultLimit, offSetQueryResults)
    setClasses(classesFromBackend)
    sumToQueryLimits(newLimitToPlus, newOffsetToPlus)
  }
  useEffect(() => {
    fetchClassesWithMembers(7, 0)
  },[])
  return (
    <Table className='w-full' titles={['Data', "Endereço", 'Vagas', 'Detalhes']}>
      {classes && classes.length > 0 && classes.map((pupilClass, i) =>(
        <tr key={i}>
          <td>{new Date(pupilClass.class_date).toLocaleDateString('pt-BR')}</td>
          <td>{pupilClass.class_address}</td>
          <td>{pupilClass.class_vacancies}</td>
          <td><Button onClick={() => setIsPopupOpen(true)}/></td>
        </tr>
      ))}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} >
        <h2>Turmas</h2>
        <Table className='w-full' titles={['Data', "Endereço", 'Vagas', 'Detalhes']}>

        </Table>
      </Popup>
    </Table>
  )
}
