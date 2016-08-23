angular.module('mks44deep.searchSoundCloud', [])
.controller('SoundCloudSearchController', ['$scope', 'Soundcloud', function($scope, Soundcloud) {
	$scope.soundcloudQuery = '';
	$scope.scResults = [];
	$scope.loading = false; 
	$scope.searchTracks = function(query) {
		$scope.loading = true; 
		Soundcloud.searchTracks(query, function(results) {
			//Flag for ng-show on player.html. 
			$scope.scResults = results;
			//Use of $apply here won't catch any errors in the model apparently.  
			$scope.loading = false; 
			$scope.$apply();

		});
		
		$scope.soundcloudQuery = '';
	};

	$scope.broadcastUrl = function(url) {
		Soundcloud.prepForBroadcast(url);
	};

	Soundcloud.broadcastChange();

}])