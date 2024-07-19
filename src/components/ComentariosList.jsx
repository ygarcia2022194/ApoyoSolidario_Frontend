import { useComentarios } from '../shared/hooks';
import { useState } from 'react';

export const ComentariosList = ({ id }) => {
    const comentarios = useComentarios(id);
    const [showAllComments, setShowAllComments] = useState(false);

    const handleToggleComments = () => {
        setShowAllComments(!showAllComments);
    };

    const displayedComentarios = showAllComments ? comentarios : comentarios.slice(0, 5);


    return (
        <section className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Comentarios</h2>
            <div className="bg-muted rounded-lg p-4">
                {displayedComentarios.map((comment) => (
                    <div key={comment._id} className="flex items-start gap-4 mb-4">
                        <div>
                            <h4 className="font-bold">{comment.nombre}</h4>
                            <p className="text-muted-foreground text-lg">{comment.comentario}</p>
                        </div>
                    </div>
                ))}
                {comentarios.length > 5 && (
                    <button
                        onClick={handleToggleComments}
                        className="mt-4 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {showAllComments ? 'Ocultar comentarios' : 'Ver más comentarios'}
                    </button>
                )}
            </div>
        </section>
    );
};
