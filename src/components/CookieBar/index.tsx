import { CookieButton } from '@/components/CookieBar/CookieButton'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CookieBar = () => {
  const [showCookieBar, setShowCookieBar ] = useState(true)

  useEffect( () => {
    const isCookiesTermsAccepted = localStorage.getItem('cookieTermsAccepted')
    if(isCookiesTermsAccepted === 'true') setShowCookieBar(false)  
  },[])

  const handleAcceptCookie = () => {
    localStorage.setItem('cookieTermsAccepted', 'true')
    setShowCookieBar(false)
  }

  if(showCookieBar){
    return (
      <div className='fixed flex flex-col text-center justify-center items-center bottom-0 h-fit p-4 gap-4 w-full bg-white'>
        <div>
          Utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento. Com esta autorização estamos aptos para coletar tais informações e utilizá-las para tais finalidades. Você pode consultar nossa <Link to={'/politica-de-privacidade'}>política de privacidade</Link>
        </div>
        <div onClick={() => handleAcceptCookie()}>
          <CookieButton />
        </div>
      </div>
    )
  }
  return ''
}
