import axios from 'axios';

const weatherClient = axios.create({
    baseURL: '/api'
});

export async function getWeatherData() {
    try {
        var latitude, longitude;
        navigator.geolocation.getCurrentPosition(
            position => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            }
        )

        var requestURL = "/weather" + "?lat=" + latitude + "&lon=" + longitude;

        const {data} = await weatherClient.get(requestURL);
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