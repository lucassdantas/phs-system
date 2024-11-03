import React, { ReactNode } from 'react'

type TableProps = {
  titles:{name:string, width:string}[];
  children:ReactNode;
  className?:string;
}

export const Table = ({titles, children, className=''}:TableProps) => {
  return (
    <table className={'w-full overflow-x-scroll'+className}>
      <thead className=''>
        <tr className='flex justify-between items-center w-full mb-4 '>
          {titles.map((title, i) => (<td key={i} className={`w-[${title.width}] text-medium-blue-phs-system font-medium`}>{title.name}</td>))}
        </tr>
      </thead>
      <tbody className=''>
        {children}
      </tbody>
    </table>
  )
}
