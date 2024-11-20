import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ComplementarMaterialsType } from '@/types/complementarMaterialsType'
import { useState, useRef } from 'react'

export const AddVideoForm = ({lessonVideo, setLessonVideo}:{lessonVideo:File | null, setLessonVideo:any}) => {
  const [complementarMaterials, setComplementarMaterials] = useState<ComplementarMaterialsType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
      addNewMaterial()
    }
  }

  const addNewMaterial = () => {
    if (lessonVideo) {
      const newMaterial: ComplementarMaterialsType = {
        name: lessonVideo.name,
        file_created_at: new Date().toISOString(),
        file_updated_at: new Date().toISOString(),
      }
      setComplementarMaterials((prevMaterials) => [...prevMaterials, newMaterial])
      setVideoPreview(URL.createObjectURL(lessonVideo))
      setLessonVideo(null)
    }
  }

  if (isLoading) return <LoadingSpinner />
  return (
    <div className='overflow-x-scroll' id='video-da-aula'>
      <Divider className='mt-4 mb-8' />
      <form encType='multipart/form-data' className='flex flex-col items-start gap-4 mt-12'>
        {videoPreview && (
          <video
            className='w-full max-w-md mb-4'
            controls
            src={videoPreview}
          >
            Seu navegador não suporta a exibição de vídeo.
          </video>
        )}
        <input
          type='file'
          accept='video/*'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null
            setLessonVideo(file)
            if (file) setVideoPreview(URL.createObjectURL(file))
          }}
        />
        <Button content='+ Adicionar vídeo' color='blue' onClick={handleFileUploadClick} />
      </form>
    </div>
  )
}
