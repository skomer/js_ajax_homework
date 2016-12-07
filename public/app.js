
var app = function() {
    var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
    makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
}

var requestComplete = function() {
    console.log('request successful');
    if (this.status !== 200) return;

    var jsonString = this.responseText;
    var albums = JSON.parse(jsonString);
    populateList(albums);
}

var populateList = function(albums) {
    var ulTag = document.getElementById('list-albums');

    for (var i = 0; i < albums.length; i++) {
        addAlbum(albums[i]);
    }
}











window.onload = app;








