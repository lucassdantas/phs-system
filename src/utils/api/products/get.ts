import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';
import { ProductsType } from '@/types/products';

export const getProducts = async (): Promise<ProductsType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/productController.php?action=getAllProducts`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todos os produtos:", error);
        throw error;
    }
};

export const getProductById = async (id: number): Promise<ProductsType> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/productController.php?action=getProductById&id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter o produto com ID ${id}:`, error);
        throw error;
    }
};
