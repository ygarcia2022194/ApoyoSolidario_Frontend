import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/apoyoSolidario/v1',
    timeout: 5000,
})

export const getPublicaciones = async () => {
    try {
        return await apiClient.get('/publications')
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}

export const getPublicacionById = async (id) => {
    try {
        return await apiClient.get(`/publication/${id}`)
    } catch (e) {
        return {
            error: true,
            e: e
        }
    }
}