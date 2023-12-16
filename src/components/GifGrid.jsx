import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onCancelCategory }) => {

    const { images, isLoading } = useFetchGifs(category);

    const onDeleteCategory = () => {
        onCancelCategory(category);
    }

    return (
        <>
            <h3 className="title-display">
                <span>{ category }</span>
                <button className="del-btn" onClick={onDeleteCategory}>Delete</button>
            </h3>
            {
                //isLoading ? ( <h2 >Cargando...</h2> ) : null
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifGridItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
