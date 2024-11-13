import { Button } from '@/components/Button'
import { ColoredContainer } from '@/components/ColoredContainer'
import { Divider } from '@/components/Divider'
import { Section } from '@/components/Section'
import { Template } from '@/components/Template'
import { useAuth } from '@/hooks/UseAuth'
import { BillingForm } from '@/pages/Checkout/BillingForm'
import { CouponForm } from '@/pages/Checkout/CouponForm'
import { LoginOrRegisterForm } from '@/pages/Checkout/LoginOrRegisterForm'
import { PaymentItems } from '@/pages/Checkout/PaymentItems'
import { ProductsTable } from '@/pages/Checkout/ProductsTable'

export const Checkout = () => {
  const {user} = useAuth()
  return (
    <Template pageTitle='Checkout'>
      <Section limiterClassname='space-y-4 py-4'>
        {user &&
          <div className="flex my-4">
            <ColoredContainer>
              <LoginOrRegisterForm/>
            </ColoredContainer>
          </div>
        }
        <div className="flex">
          <ColoredContainer className='bg-light-green-phs-system'>
            <div className='flex flex-col items-tart justify-start gap-4 w-1/2'>
              <h3 className='font-bold text-xl'>Tem um cupom? Clique aqui para inserir seu código.</h3>
              <input 
                id='coupon'
                placeholder='Insira o código'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent'
              />
              <Button content='Aplicar cupom' color='blue' className='w-fit'/>
            </div>
          </ColoredContainer>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col w-1/2">
            <ColoredContainer>
              <h3 className='font-bold text-xl'>Detalhes do faturamento</h3>
              <Divider className='mt-4 mb-8'/>
              <BillingForm/>
            </ColoredContainer>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <ColoredContainer>
              <h3 className='font-bold text-xl'>Seu pedido</h3>

              <ProductsTable/>
            </ColoredContainer>

            <ColoredContainer>
              <h3 className='font-bold text-xl'>Pagamento</h3>
              <Divider className='mt-4 mb-8'/>
              <PaymentItems/>
            </ColoredContainer>
          </div>
        </div>
      </Section>
    </Template>
  )
}
