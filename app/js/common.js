$(document).ready(function() {
      $("#my-menu").mmenu({
      	extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
      	navbar: {
      		title: '<img src="img/logo.svg">'
      	},
      	offCanvas: {
      		position: 'right'
      	}
      });
   });