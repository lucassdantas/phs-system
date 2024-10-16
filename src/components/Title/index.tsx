import React, { ReactNode } from 'react'

export const Title = ({children, className=''}:{children:ReactNode, className?:string})  => {
  return <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>
}
