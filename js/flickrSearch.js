$(document).ready(function(){

  //write your solution here...
  $("#search").click(function(){
    fetchImages();
  })
});

function fetchImages(){
  var keyword = $("#keyword").val();
  var flickrApi = 'https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=' + keyword + '&jsoncallback=?';
  var photoArr = [];

  $.getJSON(flickrApi).done(function(data){
    debugger;
    data.photos.photo.forEach(function(photo){
      var img = document.createElement("img");
      img.src = 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id +'_' + photo.secret + '.jpg';
      var src = document.getElementById("feed");
      src.appendChild(img);
    })
  })
}

/*

API url:

https://www.flickr.com/services/api/request.rest.html

AJAX request URLwith tags=cat (search term = cat):

https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=cat&jsoncallback=?

JSON Snippet:

jsonFlickrApi({
    "photos": {
        "page": 1,
        "pages": 46641,
        "perpage": 100,
        "total": "4664056",
        "photo": [
            {
                "id": "7790251192",
                "owner": "80992738@N00",
                "secret": "50b0af1b38",
                "server": "8440",
                "farm": 9,
                "title": "Friends",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            },

info about creating photo url from son data: http://www.flickr.com/services/api/misc.urls.html

http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Example Test:

http://farm9.staticflickr.com/8440/7790251192_50b0af1b38.jpg

*/
