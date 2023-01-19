import axios from 'axios';
const baseUrl = 'https://storage.googleapis.com/ya-misc/interviews/front/examples/';
const artworkUrl = (artworkId) => baseUrl + artworkId + '.json';

const ArtworkApi = {
  getArtwork: (artworkId) => axios.get(artworkUrl(artworkId)),
};

export default ArtworkApi;
