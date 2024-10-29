import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deleteOrder = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/orderController.php?action=deleteOrder&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar o pedido com ID ${id}:`, error);
        throw error;
    }
};
