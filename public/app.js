
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
    var ulTag = document.getElementById('list-albums');
    populateList(ulTag, albums);
}

var populateList = function(ulTag, albums) {
    for (var i = 0; i < albums.albums.items.length; i++) {
        addAlbum(ulTag, albums.albums.items[i]);
    }
}

var addAlbum = function(ulTag, album) {
    var liTag = document.createElement('li');
    liTag.innerText = album.name;
    ulTag.appendChild(liTag);
}







window.onload = app;








