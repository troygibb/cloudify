angular.module('mks44deep.player', [])
.controller('PlayerController', ['$scope', 'Soundcloud', function($scope, Soundcloud) {
	var testUrl = 'http://soundcloud.com/forss/flickermood';
	$scope.searchQuery = '';
	$scope.results = [];
	$scope.getTrack = function(url) {
		Soundcloud.getTrack(url, function(widget) {
			$(function() {
				let $widget = $(widget);
				$widget.height('200px')
				$widget.attr('class', 'widget');
				$widget.attr('id', url);
				$('#queue').append($widget);

				console.log(widget);

				var widgetsList = document.getElementsByClassName('widget');
				//Note index to allow FINISH event to trigger next song. 
				var index = widgetsList.length-1;

				var newWidget = soundcloud.Widget(widgetsList[index]);
				document.scWidgets.push(newWidget);

				document.scWidgets[document.scWidgets.length-1].bind(soundcloud.Widget.Events.FINISH, function() {
					//TODO: remove element from playlist?
					//var currElement = $('#'+url).remove();
					document.scWidgets[index + 1].play();
				});

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

	$scope.playNext = function(index) {

	};

	$scope.getTrack(testUrl);
}])
