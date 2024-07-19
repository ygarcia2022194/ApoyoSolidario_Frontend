import { useState } from "react";
import { useAgregarComentario } from "../shared/hooks";
import { useParams } from "react-router-dom";

export const AgregarComentarioForm = () => {
    const { id } = useParams();
    const [formState, setFormState] = useState({
        nombre: "",
        comentario: "",
    });

    const { submitComment } = useAgregarComentario();

    const handleInputValueChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submitComment(id, formState.nombre, formState.comentario);
        setFormState({
            nombre: "",
            comentario: ""
        });
    };

    const isButtonDisabled = !formState.nombre || !formState.comentario;

    return (
        <form
            onSubmit={handleSubmit}
            className="shadow rounded px-10 pt-8 pb-8 mb-4"
        >
            <h3 className="text-xl font-bold mb-4">Agrega un comentario</h3>
            <label className="block text-sm font-bold mb-2">Nombre :</label>
            <input
                name="nombre"
                type="text"
                value={formState.nombre}
                onChange={handleInputValueChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-6 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-sm font-bold mb-2">Comentario :</label>
            <textarea
                name="comentario"
                rows="4"
                cols="50"
                value={formState.comentario}
                onChange={handleInputValueChange}
                className="shadow appearance-none border rounded w-full py-2 mb-6 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline mx-auto block"
                disabled={isButtonDisabled}
            >
                Agregar
            </button>
        </form>
    );
};
