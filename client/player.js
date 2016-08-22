angular.module('mks44deep.player', [])
.controller('PlayerController', ['$scope', 'Soundcloud', function($scope, Soundcloud) {
	var testUrl = 'http://soundcloud.com/forss/flickermood';
	$scope.searchQuery = '';
	$scope.players = [];
	$scope.results = []
	$scope.getTrack = function(url) {
		Soundcloud.getTrack(url, function(widget) {
			$(function() {
				$('#player').append(widget);
			})
		})
	};
	$scope.searchTracks = function(query) {
		Soundcloud.searchTracks(query, function(results) {
			//Flag for ng-show on player.html. 
			$scope.results = results; 
			console.log(results);
		});
	};
	$scope.getTrack(testUrl);
}])
// .directive('playTrack', ['$scope, Soundcloud', function($scope, Soundcloud) {
// 	return {
// 		template: $scope.players[0]
// 	}
// }])