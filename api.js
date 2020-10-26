import apikey from './apikey.js'

let apiUrl = 'https://developer.nps.gov/api/v1/parks?';

function rawUrl() {
    return apiUrl + 'api_key=' + apikey.key + "&";
}

function parksUrl(stateCodes, limit) {
    return rawUrl() + `stateCode=${stateCodes}&limit=${limit}`;
}

export default {
    rawUrl,
    parksUrl
}