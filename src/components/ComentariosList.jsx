import { useComentarios } from '../shared/hooks';

export const ComentariosList = ({ id }) => {
    const comentarios = useComentarios(id);

    return (
        <section className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Comentarios</h2>
            <div className="bg-muted rounded-lg p-4">
                {comentarios.map((comment) => (
                    <div key={comment._id} className="flex items-start gap-4 mb-4">
                        <div>
                            <h4 className="font-bold">{comment.nombre}</h4>
                            <p className="text-muted-foreground text-lg">{comment.comentario}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
