import api from './api.js';

function renderApiResponse(data) {
    $('.data').append(`<h1>${data.fullName}</h1>
    <a href="${data.url}">Link to ${data.fullName}'s URL</a>
    <p>${data.description}</p>`);
}

function apiServiceSubmit(url) {
    $('.data').html('');
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        for(let itm of data.data) {
            renderApiResponse(itm);
        }
    }).catch(error => {
        console.log("Error:", error);
    });
}

function submitEventHandler() {
    $('#submit').on('click', function(evt) {
        evt.preventDefault();
        let stateCodes = $('#states').val();
        let limit = $('#number').val();
        let url = api.parksUrl(stateCodes, limit);
        apiServiceSubmit(url);
    });
}

function main() {
    submitEventHandler();
    console.log("Ready");
}

$(main);