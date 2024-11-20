import { userImagesDirectory } from '@/utils/constants/siteInfos'

export const RelatedInstructor = ({relatedInstructor, setRelatedInstructor}:{relatedInstructor:string, setRelatedInstructor:any}) => {
  return (
    <div className="flex gap-12" id='instrutor'>
      <div className='w-2/6'>
        <img src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Foto de perfil do usuário' className='rounded-full w-full h-auto object-cover aspect-square' />
      </div>
      <div className='w-5/6 space-y-5 flex flex-col justify-center'>
        <h3 className='text-xl font-bold'>{relatedInstructor}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, dolor sit amet, consectetur adipiscing.</p>
      </div>
    </div>
  )
}
