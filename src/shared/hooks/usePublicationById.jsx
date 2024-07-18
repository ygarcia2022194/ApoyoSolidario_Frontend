import { useState, useEffect } from "react";
import { getPublicacionById } from "../../services/api";

export const usePublicationById = (id) => {
    const [post, setPost] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchPublicacion = async () => {
            console.log(`Fetching post with id: ${id}`);
            try {
                const response = await getPublicacionById(id);
                if (!response.error) {
                    setPost(response.data);
                    console.log('Fetched post data:', response.data);
                } else {
                    console.error('Error fetching post:', response.error);
                    setPost(null);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
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