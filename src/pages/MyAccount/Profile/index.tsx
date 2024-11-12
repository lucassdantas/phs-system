import { ColoredContainer } from "@/components/ColoredContainer"
import { ChangePasswordForm } from "@/pages/MyAccount/Profile/ChangePasswordForm"
import { ChangeUserDataForm } from "@/pages/MyAccount/Profile/ChangeUserDataForm"
import { userImagesDirectory } from "@/utils/constants/siteInfos"

  export const Profile = () => {
    return (
    <div className="flex">
     <div className='w-1/3'>
      <img src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt='Foto de perfil do usuário' className='rounded-full w-[150px] h-[150px] object-cover' />
     </div>
     <div className='w-2/3 space-y-5'>
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
  