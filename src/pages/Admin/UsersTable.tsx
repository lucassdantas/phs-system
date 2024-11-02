import { Table } from '@/components/Table'
import { ClassesType } from '@/types/classes'
import { getClassesWithMembers } from '@/utils/api/classes/get'
import React, { useEffect, useState } from 'react'

export const UsersTable = () => {
  const [users, setUsers] = useState<ClassesType[] | null>(null)
  useEffect(() => {
    const fetchAllUsers = async() => {
      const usersFromBackend = await getUsers(10, 0)
      setUsers(usersFromBackend)
    }
    fetchAllUsers()
  },[])
  return (
    <Table className='w-full' titles={['N°', "Nome", 'Detalhes']}>
      {users && users.length > 0 && users.map((user, i) =>(
        <tr key={i}>
          <td>{new Date(user.user_id).toLocaleDateString('pt-BR')}</td>
          <td>{user.user_name}</td>
          <td>{''}</td>
        </tr>
      ))}
    </Table>
  )
}
