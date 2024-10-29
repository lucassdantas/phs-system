import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';
import { OrdersType } from '@/types/orders';

export const getOrders = async (): Promise<OrdersType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/orderController.php?action=getAllOrders`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todos os pedidos:", error);
        throw error;
    }
};

export const getOrderById = async (id: number): Promise<OrdersType> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/orderController.php?action=getOrderById&id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter o pedido com ID ${id}:`, error);
        throw error;
    }
};
