angular.module('mks44deep.services', [])
.factory('Soundcloud', ['$rootScope', function($rootScope) {
	var SoundCloudMethods = {};

	SoundCloudMethods.getTrack = function(track_url, cb) {
		SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
			let widget = oEmbed.html; 
		  //console.log('oEmbed response: ', oEmbed);
		  cb(widget); 
		});
	};

	SoundCloudMethods.clickedUrl = '';

	SoundCloudMethods.prepForBroadcast = function(url) {
		this.clickedUrl = url; 
		this.broadcastUrl();
	}

	SoundCloudMethods.broadcastUrl = function() {
		$rootScope.$broadcast('scUrlClicked');
	}

	SoundCloudMethods.searchTracks = function(query, cb) {
		SC.get('/tracks', {
		  q: query, 
		  limit: 50,
		  license: 'cc-by-sa'
		}).then(function(tracks) {
		  cb(tracks);
		});
	};

	return SoundCloudMethods;
}])
.factory('Spotify', ['$http', '$rootScope', function($http, $rootScope) {
	var SpotifyMethods = {};

	SpotifyMethods.searchSpotify = function(query, cb) {
		query = query.split(' ').join('+');
		$http({
			method: 'GET',
			url: `https://api.spotify.com/v1/search?query=${query}&offset=0&limit=20&type=track&limit=50`
		}).then(function(result) {
			cb(result);
		});
	}
	SpotifyMethods.clickedUrl = '';

	SpotifyMethods.prepForBroadcast = function(url) {
		this.clickedUrl = url; 
		this.broadcastUrl();
	}

	SpotifyMethods.broadcastUrl = function() {
		$rootScope.$broadcast('spotifyUrlClicked');
	}

	return SpotifyMethods;
}]);


