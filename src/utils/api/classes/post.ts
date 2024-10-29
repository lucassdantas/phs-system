import { OrdersType } from '@/types/orders';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const createOrder = async (orderData: OrdersType): Promise<OrdersType> => {
    try {
        const response = await axios.post(`${backendUrl}/controllers/orderController.php?action=createOrder`, orderData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar o novo pedido:", error);
        throw error;
    }
};
