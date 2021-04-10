import React from 'react'

export const GifGridItem = ({url, title}) => {
    return (

        <div className="card">
            <img src={url}/>
            <p>{title}</p>
        </div>
    )
}
