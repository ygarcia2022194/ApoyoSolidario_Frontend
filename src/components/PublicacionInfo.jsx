import React from 'react';
import { usePublicationById } from "../shared/hooks";
import { CardList } from "./CardList.jsx";
import { useNavigate } from 'react-router-dom';
import Navbar from './Nabvar.jsx';

export const PublicacionInfo = ({ id }) => {
    const { post, isFetching } = usePublicationById(id);
    const navigate = useNavigate();

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>No se encontró la publicación.</div>;
    }

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="bg-background text-foreground">
            <Navbar onNavClick={(view) => navigate(view)} />  {}
            <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6 mt-[60px]"> {}
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-3xl font-bold">{post.nombre}</h1>
                    </div>
                    <div className="flex items-center justify-between w-full mb-4">
                        <button
                            onClick={handleGoBack}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Regresar
                        </button>
                        <div className="flex items-center gap-4">
                            <img
                                src={post.imagenPrincipal}
                                alt={post.nombre}
                                width={30}
                                height={30}
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
                    width={300}
                    height={500}
                    className="mx-auto mb-8 h-[800px] w-full rounded-lg object-cover object-center"
                />
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Información sobre la asociación</h2>
                    <p className="text-muted-foreground text-lg">{post.descripcion}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Nuestra Misión</h2>
                    <p className="text-muted-foreground text-lg">{post.mision}</p>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Cómo Donar</h2>
                    <p className="text-muted-foreground mb-4 text-lg">{post.comoDonar}</p>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <a
                            href={post.linkDonacion}
                            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
                        >
                            Donar Ahora
                        </a>
                    </div>
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
                                width={800}
                                height={800}
                                className="h-[650px] w-full rounded-lg object-cover object-center"
                            />
                        ))}
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="mb-4 text-3xl font-bold">Características</h2>
                    <div className="bg-muted rounded-lg p-4">
                        <p className="text-muted-foreground text-lg">{post.caracteristicasPrincipales}</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default PublicacionInfo;