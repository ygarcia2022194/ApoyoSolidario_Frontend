import { useState, useEffect } from "react";
import { getPublicacionById } from "../../services/api";

export const usePublicationById = (id) => {
    const [post, setPost] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchPublicacion = async () => {
            try {
                const response = await getPublicacionById(id);
                if (!response.error) {
                    setPost(response.data);
                } else {
                    setPost(null);
                }
            } catch (error) {
                setPost(null);
            } finally {
                setIsFetching(false);
            }
        }
        fetchPublicacion();
    }, [id]);
    
    return {
        post,
        isFetching
    }
}