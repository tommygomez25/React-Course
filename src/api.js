import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{Authorization: 'Client-ID Nu_venApw-oa1f0nMbLq8ti7Mio8-Pbff74lJIw0ql8'}, 
        params : {query:term}
    });

    return response.data.results;
};

export default searchImages;