import { Button } from '@/components/Button'
import { ColoredContainer } from '@/components/ColoredContainer'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { UsersType } from '@/types/users'
import { useState } from 'react'

export const Admin = () => {
  const [users, setUsers] = useState<UsersType | null>(null)
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
              <table className='w-full'>
                <thead>
                  <td>Data</td>
                  <td>Endereço</td>
                  <td>Vaga</td>
                  <td>Detalhes</td>
                </thead>
                <tbody>
                  <tr>
                    <td>11/11/2024</td>
                    <td>Novembro</td>
                    <td>15</td>
                    <td><Button/></td>
                  </tr>
                </tbody>
              </table>
            </ColoredContainer>

          </div>
          <div className='flex w-3/12'>
            <ColoredContainer cardTitle='Solicitações'>
              <table className='w-full'>
                <thead>
                  <td>Data</td>
                  <td>Endereço</td>
                  <td>Vaga</td>
                  <td>Detalhes</td>
                </thead>
                <tbody>
                  <tr>
                    <td>11/11/2024</td>
                    <td>Novembro</td>
                    <td>15</td>
                    <td><Button/></td>
                  </tr>
                </tbody>
              </table>
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>
  )
}
