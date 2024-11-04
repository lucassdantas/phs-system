import { UsersType } from '@/types/users';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const getUsers = async (limit=10, offset=0): Promise<UsersType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/userController.php?action=getAllUsers&limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todos os usuários:", error);
        throw error;
    }
};

export const getUserById = async (id: number): Promise<UsersType> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/userController.php?action=getUserById&id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter o usuário com ID ${id}:`, error);
        throw error;
    }
};
