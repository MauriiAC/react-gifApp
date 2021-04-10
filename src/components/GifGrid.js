import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs(category);

    
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="cardsGrid">
                {data.map(img => {

                    return(
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                        //<GifGridItem key={img.id} src={img.url} title={img.title}/>
                    )
                })}
            </div>
        </>
    )
}

