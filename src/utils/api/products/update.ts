import { ProductsType } from '@/types/products';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const updateProduct = async (id: number, productData: ProductsType): Promise<ProductsType> => {
    try {
        const response = await axios.put(`${backendUrl}/controllers/productController.php?action=updateProduct&id=${id}`, productData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar o produto com ID ${id}:`, error);
        throw error;
    }
};
