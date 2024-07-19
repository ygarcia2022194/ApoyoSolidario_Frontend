import { Link } from "react-router-dom";
import { usePublicationById } from "../shared/hooks";

export const PublicacionInfo = ({ id }) => {
    const { post, isFetching } = usePublicationById(id);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>No se encontró la publicación.</div>;
    }

    return (
        <div className="bg-background text-foreground">
            <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between w-full mb-4">
                        <Link
                            to="/"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <span className="inline-block transform rotate-180">&rarr;</span> Regresar
                        </Link>
                        <div className="flex items-center gap-4">
                            <img
                                src={post.imagenPrincipal}
                                alt={post.nombre}
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                            <h1 className="text-3xl font-bold">{post.nombre}</h1>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto py-12 px-4 md:px-6">
                <img
                    src={post.imagenPrincipal || "/placeholder.svg"}
                    alt={post.nombre}
                    width={1200}
                    height={600}
                    className="mx-auto mb-8 h-[400px] w-full rounded-lg object-cover object-center"
                />
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Sobre Nosotros</h2>
                    <p className="text-muted-foreground text-lg">{post.descripcion}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Nuestra Misión</h2>
                    <p className="text-muted-foreground text-lg">{post.mision}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Cómo Donar</h2>
                    <p className="text-muted-foreground mb-4 text-lg">{post.comoDonar}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Cómo Ayudar</h2>
                    <p className="text-muted-foreground mb-4 text-lg">{post.comoAyudar}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Galería</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {post.imagenes.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Imagen de la Galería ${index + 1}`}
                                width={400}
                                height={300}
                                className="h-[200px] w-full rounded-lg object-cover object-center"
                            />
                        ))}
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Características Principales</h2>
                    <div className="bg-muted rounded-lg p-4">
                        <p className="text-muted-foreground text-lg">{post.caracteristicasPrincipales}</p>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Características Secundarias</h2>
                    <div className="bg-muted rounded-lg p-4">
                        <p className="text-muted-foreground text-lg">{post.caracteristicasSecundarias}</p>
                    </div>
                </section>
            </main>
        </div>
    );
}