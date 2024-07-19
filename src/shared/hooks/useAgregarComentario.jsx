import { useState } from "react";
import { addComment } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAgregarComentario = () => {
    const [status, setStatus] = useState("idle");

    const navigate = useNavigate();

    const submitComment = async (id, nombre, comentario) => {
        setStatus("loading");
        
        try {
            const response = await addComment(id, nombre, comentario);
            if (!response.error) {
                setStatus("success");
                toast.success("Comentario agregado");
                window.location.reload();
                navigate(`/publicaciones/${id}`);
            } else {
                setStatus("error");
                toast.error("Ocurrió un error al agregar el comentario");
            }
            return response;
        } catch (error) {
            setStatus("error");
            return { error: true };
        }
    }

    return {
        status,
        submitComment,
    }
}
