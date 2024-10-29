import { PaymentsType } from '@/types/payments';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const updatePayment = async (id: number, paymentData: PaymentsType): Promise<PaymentsType> => {
    try {
        const response = await axios.put(`${backendUrl}/controllers/paymentController.php?action=updatePayment&id=${id}`, paymentData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar o pagamento com ID ${id}:`, error);
        throw error;
    }
};
