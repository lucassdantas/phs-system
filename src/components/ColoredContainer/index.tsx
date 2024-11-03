import React, { ReactNode } from 'react'
import { RxDividerHorizontal } from 'react-icons/rx'

export const ColoredContainer = ({cardTitle, children}:{cardTitle?:string,children:ReactNode}) => {
  return (
    <div className={'bg-transparent-blue-phs-system p-5 rounded-lg'}>
      {cardTitle&&<h4 className='font-bold text-lg'>{cardTitle}</h4>}
      {children}
    </div>
  )
}
