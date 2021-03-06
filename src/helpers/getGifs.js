export const getGifs = async(category, setImages) => {
        
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=0u41TRBjfR0ZeF6UJQ792HlxDghM7yPD'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0u41TRBjfR0ZeF6UJQ792HlxDghM7yPD`


    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    })
    
    //console.log(gifs);
    return gifs;

}
