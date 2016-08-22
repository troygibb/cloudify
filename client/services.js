angular.module('mks44deep.services', [])
.factory('Soundcloud', function() {
	var getTrack = function(track_url, cb) {
		SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
			let widget = oEmbed.html; 
		  console.log('oEmbed response: ', oEmbed);
		  cb(widget); 
		});
	}
	var searchTracks = function(query, cb) {
		SC.get('/tracks', {
		  q: query, 
		  limit: 50,
		  license: 'cc-by-sa'
		}).then(function(tracks) {
		  cb(tracks);
		});
	};

	var addWidgetAPI = function() {
		
	};

	return {
		getTrack: getTrack,
		searchTracks: searchTracks,
		addWidgetAPI: addWidgetAPI
	}
})