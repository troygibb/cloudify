angular.module('mks44deep.player', [])
.controller('PlayerController', ['$scope', 'Soundcloud', function($scope, Soundcloud) {
	var testUrl = 'http://soundcloud.com/forss/flickermood';
	$scope.searchQuery = '';
	$scope.players = [];
	$scope.results = [];
	$scope.getTrack = function(url) {
		Soundcloud.getTrack(url, function(widget) {
			$(function() {
				let $widget = $(widget)
				console.log(soundcloud);
				$widget.attr('id', 'myPlayer')
				// console.log(soundcloud)
				// var x = soundcloud.getPlayer('myPlayer');
				// console.log('x is ', x);
				$('#player').append($widget);
				var w = document.getElementById('myPlayer');
				document.widget1 = soundcloud.Widget(w);
				// var x = widget1.getDuration();
				// console.log(x);
			});
		});
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
