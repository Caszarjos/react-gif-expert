import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Kratos', 'Pedro']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...cat, 'Valorant'] );
    }

    const onDeleteCategory = ( selectedCategory ) => {
        const newCategories = categories.filter(category => category !== selectedCategory)
        setCategories(newCategories);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ value => onAddCategory(value) }
            />

            {
                categories.map( (category) => 
                    (<GifGrid 
                        key={category} 
                        category={category}
                        onCancelCategory={ onDeleteCategory }
                    />)
                )
            }
        </>
    )
}
