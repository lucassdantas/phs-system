import React, { ReactNode } from 'react'

type TableProps = {
  titles:string[];
  children:ReactNode;
  className?:string;
}

export const Table = ({titles, children, className=''}:TableProps) => {
  return (
    <table className={'w-full overflow-x-scroll '+className}>
      <thead>
        <tr>
          {titles.map((title, i) => (<td key={i}>{title}</td>))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
