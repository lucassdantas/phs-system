import React from 'react'

type DividerProps = {
  className?:string;
  color?:string;
}
export const Divider = ({color='bg-medium-green-phs-system', className=''}:DividerProps) => {
  return (
    <div className={`w-full h-[1px] rounded-full ${color} ${className}`}> </div>
  )
}
