import { backendUrl } from '@/utils/constants/siteInfos';
import { OrdersType } from '@/types/orders';
import axios from 'axios';

export const getOrders = async (limit=10, offset=0): Promise<OrdersType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/OrderController.php?action=getAllOrders&limit=${limit}&offset=${offset}`);
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
