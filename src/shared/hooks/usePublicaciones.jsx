import { useState, useEffect } from 'react';
import { getPublicaciones } from '../../services';

export const usePublicaciones = () => {
    const [ publicaciones, setPublicaciones ] = useState([]);

    useEffect(() => {
        const fetchPublicaciones = async () => {
            const response = await getPublicaciones();
            !response.error ? setPublicaciones(response.data) : setPublicaciones([]);
        }
        fetchPublicaciones();
    }, []);

    return publicaciones;
}