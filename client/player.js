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
				$widget.attr('id', 'myPlayer');
				
				$widget.attr('class', 'widget');
				$('#player').append($widget);
				var w = document.getElementsByClassName('widget');
				console.log('w is ', w);
				//can only target already added html elements
					//and the added html elements need to be added to the global scope 
				var newWidget = soundcloud.Widget(w[0]);
				
				document.scWidgets.push(newWidget);
				document.scWidgets[0].bind(soundcloud.Widget.Events.FINISH, function() {
					console.log('FINISHED!')
				});

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
