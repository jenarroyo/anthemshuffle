$(function() {

    //Get Top Albums
    $.ajax({
     url:'http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=6&country=us&apikey=0d74af2fc514e207179adfcb59b6dac3&format=jsonp',
     dataType: 'jsonp', 
     success:function(result){
        
        var showAlbums = '',
            track
            ;

        for (var i=0;i<result['message']['body']['track_list'].length;i++){ 

            track = result['message']['body']['track_list'][i]['track'];
            showAlbums += '<li class="album col-md-2 col-sm-4 col-xs-12"><div class="album-info"><a href="album.html" class="album-link"><img src="'+track['album_coverart_350x350']+'" alt="" class="album-img img-responsive"></a><p><a href="album.html" class="album-link"><span>'+track['album_name']+'</span><br></a><a href="artist.html" class="artist-link ellipsis">by: <span>'+track['artist_name']+'</span></a></p></div></li>';

        	$('#top-albums-list').html(showAlbums);
        }
     },
     error:function(){
         alert("Error");
     },
    });

    // Get Top Songs
    $.ajax({
     url:'http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=30&country=us&apikey=0d74af2fc514e207179adfcb59b6dac3&format=jsonp',
     dataType: 'jsonp', 
     success:function(result){
        
        var showTrack = '',
            track
            ;

        for (var i=0;i<result['message']['body']['track_list'].length;i++){ 

            track = result['message']['body']['track_list'][i]['track'];
            showTrack += '<li class="song col-md-4 col-sm-6 col-xs-12"><a href="lyrics.html" class="song-link"><h4 class="song-title">'+track['track_name']+'</h4></a><a href="artist.html" class="artist-link"><h5 class="artist-name ellipsis">by: '+track['artist_name']+'</h5></a></li>';

            $('#top-tracks-list').html(showTrack);
        }
     },
     error:function(){
         alert("Error");
     },
    });

});