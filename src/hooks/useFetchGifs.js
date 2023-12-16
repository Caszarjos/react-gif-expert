import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    // Solo carge la primera vez
    useEffect( () => {
        getImages();
    }, []);

    // Cuando tiene el mismo nombre no se añade el :
    return {
        images: images,
        isLoading
    }

}