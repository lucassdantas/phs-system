import React, { ReactNode } from 'react'
import { RxDividerHorizontal } from 'react-icons/rx'

export const ColoredContainer = ({cardTitle, children}:{cardTitle?:string,children:ReactNode}) => {
  return (
    <div className={'bg-transparent-blue-phs-system p-3 rounded-lg'}>
      {cardTitle&&
        <div>
          <h4>{cardTitle}</h4>
        </div>
      }
      {children}
    </div>
  )
}
