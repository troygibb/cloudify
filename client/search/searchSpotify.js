angular.module('mks44deep.searchSpotify', [])
.controller('SearchSpotifyController', ['$scope', 'Spotify', '$rootScope', function($scope, Spotify, $rootScope) {
	$scope.searchResults = [];
	$scope.spotifyQuery = '';
	$scope.loading = false; 
	$scope.searchSpotify = function(query) {
		console.log('query running ', query);
		$scope.loading = true; 
		Spotify.searchSpotify(query, function(result) {
			$scope.searchResults = result.data.tracks.items;
			$scope.loading = false; 
			console.log(result);
		})
	};

	$scope.broadcastUrl = function(url) {
		Spotify.prepForBroadcast(url);
	};
	
	Spotify.broadcastChange();
	
	//$scope.searchSpotify('taylor swift');
}])

//artwork: result.data.tracks.items.album.images[1]
	//height: 300; width: 300; url: ***
//song name: result.data.tracks.items.name
//artists: result.data.tracks.artists (array)
	//.name