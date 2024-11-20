import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Table } from '@/components/Table'
import { ComplementarMaterialsType } from '@/types/complementarMaterialsType'
import { useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export const ComplementarMaterialTable = () => {
  const [complementarMaterials, setComplementarMaterials] = useState<ComplementarMaterialsType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [newFile, setNewFile] = useState<File | null>(null)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > totalPages || pageNumber < 1) return
    setCurrentPage(pageNumber)
  }

  const addNewMaterial = () => {
    if (newFile) {
      const newMaterial: ComplementarMaterialsType = {
        name: newFile.name,
        file_created_at: new Date().toISOString(),
        file_updated_at: new Date().toISOString(),
      }
      setComplementarMaterials((prevMaterials) => [...prevMaterials, newMaterial])
      setNewFile(null)
    }
  }

  const deleteItem = (materialToDelete: ComplementarMaterialsType) => {
    setComplementarMaterials((prevMaterials) =>
      prevMaterials.filter(material => material !== materialToDelete)
    )
  }

  if (isLoading) return <LoadingSpinner />
  return (
    <div className='overflow-x-scroll'>
      <div className='w-full flex justify-end items-center space-x-4'>
        <FaLongArrowAltLeft
          className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'
          size={28}
          onClick={() => handlePageChange(currentPage - 1)}
        />
        <span>{currentPage}/{totalPages}</span>
        <FaLongArrowAltRight
          className='cursor-pointer text-medium-green-phs-system hover:text-medium-blue-phs-system'
          size={28}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </div>
      
      <Divider className='mt-4 mb-8' />

      <Table titles={[
        { name: 'Arquivo', width: '25%' },
        { name: 'Criado em', width: '25%' },
        { name: 'Modificado em', width: '25%' },
        { name: '', width: '25%' },
      ]}>
        {complementarMaterials && complementarMaterials.length > 0 && complementarMaterials.map((fileData, i) => (
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full'}>
            <td className='w-[25%] min-w-[120px]'>{fileData.name}</td>
            <td className='w-[25%] min-w-[120px]'>{new Date(fileData.file_created_at).toLocaleDateString('pt-BR')}</td>
            <td className='w-[25%] min-w-[120px]'>{new Date(fileData.file_updated_at).toLocaleDateString('pt-BR')}</td>
            <td className='w-[20%] min-w-[120px]'><span className='text-red-700 cursor-pointer' onClick={() => deleteItem(fileData)}>Remover</span> </td>
          </tr>
        ))}
      </Table>
      <form encType='multipart/form-data' className='flex flex-col items-start gap-4 mt-12' >
        <input type='file' onChange={(e) => setNewFile(e.target.files ? e.target.files[0] : null)} />
        <Button content='Enviar Arquivo' onClick={addNewMaterial} />
      </form>
    </div>
  )
}
