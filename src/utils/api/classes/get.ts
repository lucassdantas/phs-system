import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';
import { ClassesType } from '@/types/classes';

export const getClasses = async (): Promise<ClassesType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/classController.php?action=getAllClasses`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todas as turmas:", error);
        throw error;
    }
};

export const getOrderById = async (id: number): Promise<ClassesType> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/classController.php?action=getClassById&id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter a turma com ID ${id}:`, error);
        throw error;
    }
};
export const getClassesWithMembers = async (limit=10, offset=0): Promise<ClassesType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/classController.php?action=getClassesWithMembers&limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter as turmas com seus membros:`, error);
        throw error;
    }
};
