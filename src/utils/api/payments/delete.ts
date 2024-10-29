import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deletePayment = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/paymentController.php?action=deletePayment&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar o pagamento com ID ${id}:`, error);
        throw error;
    }
};
