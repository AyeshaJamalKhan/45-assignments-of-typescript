function make_album(album_artist:string,album_title:string,tracks?:number){
 let album: {artist:string,title:string,tracks?:number} = {
    artist:album_artist,
    title:album_title
 };

 if(tracks !== undefined){
    album.tracks =tracks;
 }
     return album;
};
console.log(make_album("tylor swist","Lover "));
console.log(make_album("tylor swift","Folklore "));
// calling a make album fuction with thirt parameter.
console.log(make_album("tylor swift","Red  ", 4))