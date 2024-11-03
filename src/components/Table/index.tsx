import React, { ReactNode } from 'react'

type TableProps = {
  titles:{name:string, width:string}[];
  children:ReactNode;
  className?:string;
}

export const Table = ({titles, children, className=''}:TableProps) => {
  return (
    <table className={'w-full '+className}>
      <thead >
        <tr className='flex justify-between items-center mb-4 w-full'>
          {titles.map((title, i) => (<td key={i} className={`w-[${title.width}] min-w-[120px] text-medium-blue-phs-system font-semibold`}>{title.name}</td>))}
        </tr>
      </thead>
      <tbody className='w-full'>
        {children}
      </tbody>
    </table>
  )
}
