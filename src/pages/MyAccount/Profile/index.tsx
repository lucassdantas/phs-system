import { ColoredContainer } from "@/components/ColoredContainer"
import { ChangePasswordForm } from "@/pages/MyAccount/Profile/ChangePasswordForm"
import { ChangeUserDataForm } from "@/pages/MyAccount/Profile/ChangeUserDataForm"
import { userImagesDirectory } from "@/utils/constants/siteInfos"

  export const Profile = () => {
    return (
    <div className="flex gap-12">
     <div className='w-2/6'>
      <img src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Foto de perfil do usuário' className='rounded-full w-full h-auto object-cover aspect-square' />
     </div>
     <div className='w-5/6 space-y-5'>
      <ColoredContainer>
        <ChangeUserDataForm/>
      </ColoredContainer>
      <ColoredContainer>
        <h3 className='font-bold text-2xl'>Alterar senha</h3>
        <ChangePasswordForm/>
      </ColoredContainer>
     </div>
    </div>
    )
  }
  