import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { ClassChangeRequests } from '@/pages/Admin/ClassChangeRequests'
import { ClassesTable } from '@/pages/Admin/ClassesTable'
import { InstructoresList } from '@/pages/Admin/InstructoresList'
import { LessonsTable } from '@/pages/Admin/LessonsTable'
import { UsersTable } from '@/pages/Admin/UsersTable'

export const Admin = () => {
  return (
    <Template pageTitle='Área administrativa'>
      <Section className='py-12'>
        <div className='w-full flex lg:flex-row flex-col-reverse justify-center items-center mb-12 space-x-12'>
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
             <ClassesTable/>
            </ColoredContainer>

            <ColoredContainer cardTitle={'Usuários'}>
              <UsersTable/>
            </ColoredContainer>

          </div>
          
          <div className='flex flex-col w-3/12 space-y-8'>
            <ColoredContainer cardTitle='Solicitações'>
              <ClassChangeRequests/>
            </ColoredContainer>

            <ColoredContainer cardTitle='Instrutores'>
              <InstructoresList/>
            </ColoredContainer>
          </div>
        </div>
        <div className='w-full flex lg:flex-row flex-col-reverse justify-center items-center'>
          <ColoredContainer cardTitle='Lista de aulas'>
            <LessonsTable/>
          </ColoredContainer>
        </div>
      </Section>
    </Template>
  )
}
