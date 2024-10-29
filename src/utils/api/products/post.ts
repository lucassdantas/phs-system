import { ProductsType } from '@/types/products';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const createProduct = async (productData: ProductsType): Promise<ProductsType> => {
    try {
        const response = await axios.post(`${backendUrl}/controllers/productController.php?action=createProduct`, productData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar o novo produto:", error);
        throw error;
    }
};
