'use strict';


requirejs.config({
    paths: {
    	'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});


require(['jquery', 'Backbone'], function ($, Backbone) {

    var app = {
        initialize: function () {
            
        	$('hp').click(function(){
        		$('h1').fadeIn();
        	});

        	var year = $('.year').val();
        }
    };

    app.initialize();

});





