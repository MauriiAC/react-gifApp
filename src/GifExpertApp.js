import {React, useState} from 'react';
import {AddCategory} from './components/AddCategory.js'
import { GifGrid } from './components/GifGrid.js';
//import PropTypes from 'prop-types';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    return (

        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ul>
                {
                    categories.map(category => {
                        return ( 
                            <li key={category}>
                                <GifGrid
                                    category={category}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export {GifExpertApp};