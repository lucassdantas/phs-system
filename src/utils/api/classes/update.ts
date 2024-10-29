import { OrdersType } from '@/types/orders';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const updateOrder = async (id: number, orderData: OrdersType): Promise<OrdersType> => {
    try {
        const response = await axios.put(`${backendUrl}/controllers/orderController.php?action=updateOrder&id=${id}`, orderData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar o pedido com ID ${id}:`, error);
        throw error;
    }
};
