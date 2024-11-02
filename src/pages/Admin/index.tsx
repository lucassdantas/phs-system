import { Button } from '@/components/Button'
import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Table } from '@/components/Table'
import { Template } from '@/components/Template'
import { ClassesType } from '@/types/classes'
import { UsersType } from '@/types/users'
import { getClassesWithMembers } from '@/utils/api/classes/get'
import { useEffect, useState } from 'react'

export const Admin = () => {
  const [users, setUsers] = useState<UsersType | null>(null)
  const [classes, setClasses] = useState<ClassesType[] | null>(null)
  useEffect(() => {
    const fetchClassesWithMembers = async() => {
      const classesFromBackend = await getClassesWithMembers(10, 0)
      console.log(classesFromBackend)
      setClasses(classesFromBackend)
    }
    fetchClassesWithMembers()
  },[])
  return (
    <Template pageTitle='Área administrativa'>
      <Section>
        <div className='w-full flex lg:flex-row flex-col-reverse justify-center items-center py-12 space-x-12'>
          <div className='flex flex-col space-y-8 w-9/12'>
            
            <ColoredContainer>
              <div className="flex">
                <div className="flex flex-col w-1/3">
                  <img src={''} alt='Login'/>
                </div>
                <div className="flex flex-col w-2/3">
                  <p>Login</p>
                </div>
              </div>
            </ColoredContainer>
            
            <ColoredContainer cardTitle={'Turmas'}>
              <Table className='w-full' titles={['Data', "Endereço", 'Vagas', 'Detalhes']}>
                {classes && classes.length > 0 && classes.map((pupilClass, i) =>(
                  <tr key={i}>
                    <td>{new Date(pupilClass.class_date).toLocaleDateString('pt-BR')}</td>
                    <td>{pupilClass.class_address}</td>
                    <td>{pupilClass.class_vacancies}</td>
                  </tr>
                ))}
              </Table>
            </ColoredContainer>

            <ColoredContainer cardTitle={'Usuários'}>
              <Table className='w-full' titles={['N°', 'Nome', 'Detalhes']}>
                {classes && classes.length > 0 && classes.map((pupilClass, i) =>(
                  <tr key={i}>
                    <td>{new Date(pupilClass.class_date).toLocaleDateString('pt-BR')}</td>
                    <td>{pupilClass.class_address}</td>
                    <td>{pupilClass.class_vacancies}</td>
                  </tr>
                ))}
              </Table>
            </ColoredContainer>

          </div>
          <div className='flex w-3/12'>
            <ColoredContainer cardTitle='Solicitações'>
              <Table className='w-full' titles={['Data', "Endereço", 'Vagas', 'Detalhes']}>
                <tr></tr>
              </Table>
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>
  )
}
