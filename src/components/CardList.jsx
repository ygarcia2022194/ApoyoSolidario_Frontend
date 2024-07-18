import {Card} from './Card'; 
import { usePublicaciones } from '../shared/hooks';

export const CardList = () => {
    const todasLasPublicaciones = usePublicaciones();

    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-1 gap-8 mx-6 sm:grid-cols-2 sm:mx-0 md:grid-cols-3">
                {todasLasPublicaciones.map((card, index) => (
                    <Card
                        key={index}
                        imgSrc={card.imagenPrincipal}
                        altText={card.nombre}
                        title={card.nombre}
                        link={card._id}
                    />
                ))}
            </div>
        </div>
    );
};