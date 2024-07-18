import { Link } from "react-router-dom"

export const Card = ({ imgSrc, altText, title, link }) => {
    return (
        <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    src={imgSrc}
                    width={400}
                    height={250}
                    alt={altText}
                    className="w-full h-[250px] object-cover sm:h-[200px] md:h-[250px]"
                />
                <Link
                    to={`/publicaciones/${link}`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white font-medium text-lg"
                >
                    Ver más
                </Link>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
            </div>
        </div>
    );
};