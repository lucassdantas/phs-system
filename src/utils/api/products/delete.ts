import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deleteProduct = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/productController.php?action=deleteProduct&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar o produto com ID ${id}:`, error);
        throw error;
    }
};
