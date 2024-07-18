import { useState, useEffect } from 'react'

export const ComentariosList = ({ id }) => {

    const comments = [
        {
            id: 1,
            author: "John Doe",
            message: "Esta organización está haciendo un trabajo increíble. ¡Sigan así!"
        },
        {
            id: 2,
            author: "Jane Smith",
            message: "Gracias por todo lo que hacen por los animales. ¡Son unos héroes!"
        },
        {
            id: 3,
            author: "Carlos Pérez",
            message: "Adopté a mi perro gracias a ustedes. No puedo estar más agradecido."
        },
        {
            id: 4,
            author: "Ana García",
            message: "La misión de su organización es inspiradora. ¡Gracias por todo su esfuerzo!"
        }
    ];
    
    return (
        <section className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Comentarios</h2>
            <div className="bg-muted rounded-lg p-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-4 mb-4">
                        <div>
                            <h4 className="font-bold">{comment.author}</h4>
                            <p className="text-muted-foreground text-lg">{comment.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
    
};