import { Divider } from '@/components/Divider'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Table } from '@/components/Table'
import { LessonsType } from '@/types/lessons'
import { ProductsType } from '@/types/products'
import { getProductById } from '@/utils/api/products/get'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const ProductsTable = () => {
  const [product, setProduct] = useState<ProductsType[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchParams] = useSearchParams()

  const fetchProducts = async(id:number) => {
    const productsFromBackEnd = await getProductById(id)
    setProduct(productsFromBackEnd)
    setIsLoading(false)
  }

useEffect(() => {
  setIsLoading(true);
  const productId = searchParams.get('productId');
  if (productId !== null) {
    fetchProducts(Number(productId));
  } else {
    // Lidar com o caso em que productId é null, se necessário
    console.warn('Product ID is null');
  }
}, []);

  if(isLoading) return <LoadingSpinner/>
  return (
    <div className='overflow-x-scroll'>
      <Divider className='mt-4 mb-8'/>

      <Table titles={[
        {name:'Produto', width:'70%'}, 
        {name:"Total",   width:'30%'},
      ]}>
        {product && product.length > 0 && product.map((productData, i) => {console.log(productData); return(
          <tr key={i} className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' + (i==product.length-1? 'border-b':'')}>
            <td className='w-[70%] min-w-[120px]'>{productData.name}</td>
            <td className='w-[30%] min-w-[120px]'>{productData.price}</td>
          </tr>
        )})}
        <tr className={'flex justify-between py-4 border-t border-neutral-300 text-neutral-700 w-full' }>
          <td className='w-[70%] min-w-[120px] font-bold text-medium-blue-phs-system'>{'Total'}</td>
          <td className='w-[30%] min-w-[120px] font-bold text-black'>{'R$ 3000,00'}</td>
        </tr>
      </Table>
    </div>
  )
}
