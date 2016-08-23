angular.module('mks44deep.player', [])
.controller('PlayerController', ['$scope', 'Soundcloud', 'Spotify', function($scope, Soundcloud, Spotify) {
	var testUrl = 'http://soundcloud.com/forss/flickermood';
	$scope.getSCTrack = function(url) {
		Soundcloud.getTrack(url, function(widget) {
			$(function() {
				let $widget = $(widget);
				$widget.height('80px')
				$widget.width('600px');
				$widget.attr('class', 'widget');
				$widget.attr('id', url);
				$('#queue').append($widget);
				var widgetsList = document.getElementsByClassName('widget');
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

	$scope.appendSpotifyTrack = function(url) {
		console.log()
		$(function() {
			let widgetSrc = "https://embed.spotify.com/?uri=" + url; 
			let widget = (`<iframe src=${widgetSrc} width="600" height="80" frameborder="0" allowtransparency="true"></iframe>`);
			$('#queue').append(widget);
		});
	};

	$scope.$on('scUrlClicked', function() {
		$scope.getSCTrack(Soundcloud.clickedUrl);
	});

	$scope.$on('spotifyUrlClicked', function() {
		$scope.appendSpotifyTrack(Spotify.clickedUrl);
	});

}])