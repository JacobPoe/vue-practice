import axios from 'axios';

const weatherClient = axios.create({
    baseURL: 'http://localhost:9091/'
});

export async function getWeatherData(lat: string, lon: string) {
    try {
        var requestURL = "/weather" + "?lat=" + lat + "&lon=" + lon;

        const {data} = await weatherClient.get(requestURL);
        console.log(data);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getApiKey() {
    try {
        const {data} = await weatherClient.get('/key');
        return [null, data];
    } catch (error) {
        return [error];
    }
}