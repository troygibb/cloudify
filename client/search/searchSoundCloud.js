angular.module('mks44deep.searchSoundCloud', [])
.controller('SoundCloudSearchController', ['$scope', 'Soundcloud', function($scope, Soundcloud) {
	$scope.soundcloudQuery = '';
	$scope.scResults = [];
	$scope.searchTracks = function(query) {
		Soundcloud.searchTracks(query, function(results) {
			//Flag for ng-show on player.html. 
			$scope.scResults = results;
			//Use of $apply here won't catch any errors in the model apparently.  
			$scope.$apply();
		});
		
		$scope.soundcloudQuery = '';
	};

	$scope.broadcastUrl = function(url) {
		Soundcloud.prepForBroadcast(url);
	};

	Soundcloud.broadcastChange();

}])