const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=9LfBNSlZUPaiGzvZGZwZVIAEIoxJvANu`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  console.log(data);
  // Array de onbjetos que vamos a mapear para obtener otro array de objetos con as propiedades que necesitamos de cada uno 
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  })
  console.log(gifs);
  return gifs;
}

export default getGifs;