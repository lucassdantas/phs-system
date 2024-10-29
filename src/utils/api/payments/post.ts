import { PaymentsType } from '@/types/payments';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const createPayment = async (paymentData: PaymentsType): Promise<PaymentsType> => {
    try {
        const response = await axios.post(`${backendUrl}/controllers/paymentController.php?action=createPayment`, paymentData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar o novo pagamento:", error);
        throw error;
    }
};
