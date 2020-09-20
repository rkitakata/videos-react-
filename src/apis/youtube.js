import axios from 'axios';

const KEY = 'AIzaSyDRetWr9T8BU4gbMrgz79VIU13bjTBmceg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});