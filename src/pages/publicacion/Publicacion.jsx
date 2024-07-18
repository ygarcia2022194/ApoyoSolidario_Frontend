import { useParams } from "react-router-dom";
import { PublicacionInfo } from '../../components/PublicacionInfo'
import { ComentariosList } from '../../components/ComentariosList'
import { AgregarComentarioForm } from '../../components/AgregarComentarioForm'

export const Publicacion = () => {
    const { id } = useParams();

    console.log(id);
    return (
        <div className="bg-background text-foreground">
            <main className="container mx-auto py-12 px-4 md:px-6">
                <PublicacionInfo id={id} />
                <ComentariosList id={id} />
                <section className="mb-12 flex justify-center">
                    <AgregarComentarioForm />
                </section>
            </main>
        </div>
    );
}