angular.module('mks44deep.searchSpotify', [])
.controller('SearchSpotifyController', ['$scope', 'Spotify', function($scope, Spotify) {
	$scope.searchResults = [];
	$scope.spotifyQuery = '';
	$scope.searchSpotify = function(query) {
		console.log('query running ', query);
		Spotify.searchSpotify(query, function(result) {
			$scope.searchResults = result.data.tracks.items;
			console.log(result);
		})
	};

	$scope.broadcastUrl = function(url) {
		Spotify.prepForBroadcast(url);
	};

	//$scope.searchSpotify('taylor swift');
}])

//artwork: result.data.tracks.items.album.images[1]
	//height: 300; width: 300; url: ***
//song name: result.data.tracks.items.name
//artists: result.data.tracks.artists (array)
	//.name