import { useState, useEffect } from "react";
import { getPublicacionById } from '../../services/api';

export const useComentarios = (id) => {
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const fetchComentarios = async () => {
            try {
                const response = await getPublicacionById(id);
                if (response && response.data) {
                    setComentarios(response.data.comentarios);
                } else {
                    console.error("No data found in response:", response);
                }
            } catch (error) {
                console.error("Error fetching comments:", error); 
            }
        };
        fetchComentarios();
    }, [id]);

    return comentarios;
}
