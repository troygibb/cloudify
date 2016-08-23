angular.module('mks44deep.searchSoundCloud', [])
.controller('SoundCloudSearchController', ['$scope', 'Soundcloud',  function($scope, Soundcloud) {
	$scope.soundcloudQuery = '';
	$scope.scResults = [];
	$scope.searchTracks = function(query) {
		Soundcloud.searchTracks(query, function(results) {
			//Flag for ng-show on player.html. 
			console.log(results);
			$scope.scResults = results; 
		});
	};
	$scope.broadcastUrl = function(url) {
		Soundcloud.prepForBroadcast(url);
	}
}])