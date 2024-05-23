"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(album_artist, album_title, tracks) {
    let album = {
        artist: album_artist,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
console.log(make_album("tylor swist", "Lover "));
console.log(make_album("tylor swift", "Folklore "));
console.log(make_album("tylor swift", "Red  ", 4));
