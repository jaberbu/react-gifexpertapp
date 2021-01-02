export const getGifs = async(category) => {
  // Q8jZQB8KDGZMDWdIurMqws9yC85zrhuf
  // api.giphy.com/v1/gifs/search	
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Q8jZQB8KDGZMDWdIurMqws9yC85zrhuf`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;
  
}