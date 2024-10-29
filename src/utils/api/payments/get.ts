import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';
import { PaymentsType } from '@/types/payments';

export const getPayments = async (): Promise<PaymentsType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/paymentController.php?action=getAllPayments`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todos os pagamentos:", error);
        throw error;
    }
};

export const getPaymentById = async (id: number): Promise<PaymentsType> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/paymentController.php?action=getPaymentById&id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter o pagamento com ID ${id}:`, error);
        throw error;
    }
};
