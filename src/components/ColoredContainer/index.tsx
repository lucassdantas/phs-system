import { ReactNode } from 'react'

export const ColoredContainer = ({className='bg-transparent-blue-phs-system', cardTitle, children}:{className?:string, cardTitle?:string, children:ReactNode}) => {
  return (
    <div className={`${className} p-5 rounded-lg w-full`}>
      {cardTitle &&<h4 className='font-bold text-lg'>{cardTitle}</h4>}
      {children}
    </div>
  )
}
