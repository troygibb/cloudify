angular.module('mks44deep', ['mks44deep.services', 'mks44deep.player', 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/player', {
			templateUrl: 'player.html',
			controller: 'PlayerController'
		})
}])
.run(['$location', function($location) {
	SC.initialize({
  	client_id: '1c5dbc79108d267f31b122d73159a252'
	});
	document.scWidgets = [];
	console.log("I'm working!");
	console.log('SC is ', SC);
	$location.path('/player');
}])




// $(document).ready(function() {

// 	SC.initialize({
//   	client_id: '1c5dbc79108d267f31b122d73159a252'
// 	});

// 	$('button').on('click', function() {
// 		let searchQuery = $('#search').val();
// 		getResults(searchQuery);
// 	});

// 	var track_url = 'http://soundcloud.com/forss/flickermood';
// 	SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
// 		let widget = oEmbed.html; 
// 		widget = $(widget).width('700px');
// 		$('#player').append(widget);
// 	  console.log('oEmbed response: ', oEmbed);
// 	});

// 	function getResults(query) {
// 		SC.get('/tracks', {
// 		  q: query, 
// 		  license: 'cc-by-sa'
// 		}).then(function(tracks) {
// 		  console.log(tracks);
// 		  displayResults(tracks);
// 		});
// 	};

// 	function displayResults(arr) {
// 		let search = $('#searchField');
// 		arr.forEach(function(song) {
// 			let container = $('<div/>')
// 			container.addClass('.row');
// 			//artwork_url, permalink_url, title, user.username
// 			console.log(container);
// 			search.append(container);
// 		});
// 	}

// })